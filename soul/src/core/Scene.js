'use strict'
var TWEEN = require('../lib/tween.js')
var THREE = require('../lib/three.r86.js')

// 视图层
// 继承自THREE.Scene
function Scene () {
    THREE.Scene.call(this)
    // 订阅者
    this.subs = []
}

Scene.prototype = Object.create(THREE.Scene.prototype)

Scene.constructor = Scene

Scene.prototype.init = function () {
    this.WIDTH = window.innerWidth
    this.HEIGHT = window.innerHeight
    // 小窗口缩略图宽高
    this.INSETWIDTH = this.INSETHEIGHT = this.HEIGHT / 4
    // this.position = new THREE.Vector3(0, 0, 0)

    let WIDTH = this.WIDTH, HEIGHT = this.HEIGHT

    // create scene, camera, renderer and control
    // 1.camera
    this.camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 10000)
    this.camera.position.set(0, 0, 1000)
    this.camera.lookAt(this.position)
    // 小窗口缩略视图
    // 副相机
    this.camera2 = new THREE.PerspectiveCamera(60, this.INSETWIDTH / this.INSETHEIGHT, 1, 10000)
    this.camera2.position.copy(this.camera.position)

    // 2.renderer
    this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true, // required to support .toDataUrl() 解决base64图片显示黑色的问题
    })
    this.renderer.setSize(WIDTH, HEIGHT)
    // renderer.setViewport(w, h)
    // renderer.setClearColor('#FF719A', 1)
    this.renderer.shadowMap.enabled = true

    // css2DRenderer
    this.renderer2d = new THREE.CSS2DRenderer();
    this.renderer2d.setSize( WIDTH, HEIGHT);
    this.renderer2d.domElement.style.position = 'absolute';
    this.renderer2d.domElement.style.top = 0;

    // 3.control
    this.control = new THREE.OrbitControls(this.camera, this.renderDom)
    this.control.enablePan = true
    this.control.autoRotate = true
    this.control.rotateSpeed = 0.2
    this.control.minDistance = 50
    this.control.maxDistance = 2000

    document.querySelector('body').appendChild(this.renderer.domElement)
    document.querySelector('body').appendChild(this.renderer2d.domElement);

    // 调用其订阅者 manage数据控制层、event事件层、background背景层等的初始化方法
    this.subs.length && this.subs.forEach(sub => {
        sub.init()
    })
}

Scene.prototype.render = function () {
    TWEEN.update()

    let renderer = this.renderer, 
        renderer2d = this.renderer2d,
        camera = this.camera,
        camera2 = this.camera2;

    let WIDTH = this.WIDTH,
        HEIGHT = this.HEIGHT;

    // 通过.setViewport()方法可以实现在一个canvas画布上面不同区域分别执行.render()输出渲染结果
    // 视口左上角相对canvas画布左上角原点的坐标位置与视口的宽高尺寸, 四个参数都是像素值
    renderer.setViewport(0, 0, WIDTH, HEIGHT)
    // renderer.setClearColor(0x000000, 0) // 设置颜色和透明度, 让两个区域显示对比
    renderer.render(this, camera)

    renderer.clearDepth() // 清除深度缓存

    // 小窗口缩略视图
    // 相当于整个场景的缩影, 渲染一次场景, 再渲染一次缩略视图
    // 启用或禁用剪裁检测. 若启用，则只有在所定义的裁剪区域内的像素才会受之后的渲染器影响
    renderer.setScissorTest(true); // (*)
    // 将剪裁区域设为(x, y)到(x + width, y + height)
    renderer.setScissor(10, HEIGHT - this.INSETHEIGHT - 10, this.INSETWIDTH, this.INSETHEIGHT);
    // 将视口大小设置为(x, y)到 (x + width, y + height).
    renderer.setViewport(10, HEIGHT - this.INSETHEIGHT - 10, this.INSETWIDTH, this.INSETHEIGHT);
    // 跟随主相机的旋转角度和位置
    camera2.position.copy(camera.position); //复制主相机的位置
    camera2.quaternion.copy(camera.quaternion); //复制主相机的四元数
    // renderer.setClearColor(0x222222,1);
    renderer.render(this, camera2);
    // 关闭裁剪，避免裁剪主场景
    renderer.setScissorTest(false); // (*)

    renderer2d.render( this, camera );

    this.control.update()

    requestAnimationFrame(this.render.bind(this))
}

Scene.prototype.start = function () {
    this.render()
}

module.exports = Scene
