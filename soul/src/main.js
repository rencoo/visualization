// 导入样式
import './css/main.css'

// 初始化自定义THREE方法
import './init/THREE.init.js'
// 导入场景类
import Scene3D from './init/Scene3D.js'

var TWEEN = require('./libs/tween.js')
var THREE = require('./libs/three.r86.js')

import './libs/CSS2DRenderer.js'

import MarkingFont from './obj/MarkingFont.js'
import MarkingPoint  from './obj/MarkingPoint.js'

import { DATA } from './data/DATA.js'

var scene, camera, fieldOfView, aspectRatio, nearPlane, renderer2d, farPlane, ambientLight,
    farPlane, HEIGHT, WIDTH, renderer, container, orbitControls;
// var drawCount;

window.addEventListener('load', init, false);
function init() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    // 创建3D场景, 相机, 渲染器和控制器
    scene = new Scene3D(WIDTH, HEIGHT)
    camera = scene.camera
    renderer = scene.renderer
    orbitControls = scene.control

    // 在场景中添加雾的效果；样式上使用和背景一样的颜色
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    // 在HTML创建的容器中添加渲染器的DOM元素
    container = document.querySelector('body');
    container.appendChild(renderer.domElement);

    // CSS2DRenderer渲染
    // renderer2d = new THREE.CSS2DRenderer();
    // renderer2d.setSize( WIDTH, HEIGHT);
    // renderer2d.domElement.style.position = 'absolute';
    // renderer2d.domElement.style.top = 0;
    // container.appendChild(renderer2d.domElement);

    // // 创建控制器
    // // 页面中共有Renderer, labelRenderer 两个renderer。一个渲染出canvas, 一个是div。大小相同. 位置重叠，div会在canvas上面显示。
    // // 所以在(camera, renderer.domElement)中, renderer.domElement会在labelRenderer.domElement下面而导致 controls无法触发。
    // // 所以要把这个地方换成labelRenderer.domElement或者不写。
    // // 不写默认是document,会在整个页面触发控制事件,单页满屏的时候没关系,在窗口模式的时候就出现了不理想的情况。
    // // orbitControls = new THREE.OrbitControls(camera, renderer.domElement); // 这样写 controls无法触发
    // // orbitControls = new THREE.OrbitControls(camera, renderer2d.domElement);
    // orbitControls = new THREE.OrbitControls(camera);
    // // this.orbitControls.maxPolarAngle = Math.PI * 0.495;
    // // orbitControls.enableZoom = true;
    // // orbitControls.enablePan = true;
    // orbitControls.autoRotate = true;
    // orbitControls.rotateSpeed = 0.2
    // orbitControls.minDistance = 50;
    // orbitControls.maxDistance = 2000;

    /* 轨迹球控件 */
    // controls = new THREE.TrackballControls(camera, renderer.domElement);

    /* 属性参数 */
    // controls.rotateSpeed = 0.2;// 旋转速度
    // controls.zoomSpeed = 0.2;// 缩放速度
    // controls.panSpeed = 0.1;// 平controls

    // controls.staticMoving = false;// 静止移动，为 true 则没有惯性
    // controls.dynamicDampingFactor = 0.2;// 阻尼系数 越 则滑动越大

    // controls.minDistance = 50; // 最视角
    // controls.maxDistance = 5000;// 最大视角 Infinity 无穷大

    // 监听屏幕, 缩放屏幕更新相机和渲染器的尺寸
    window.addEventListener('resize', handleWindowResize, false);

    // 添加光源
    createLights();
    
    // 球体
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(300, 15, 15), new THREE.MeshBasicMaterial({ color: '#0000ff', wireframe: true }));
    sphere.position.set(0,0,0);
    scene.add(sphere);

    // 调用循环函数, 在每帧更新对象的位置和渲染场景
    loop();

    // 标记点及标记文字
    var markings = new THREE.Group();
    var fonts = new THREE.Group();

    DATA.marking.forEach(item => {
        item = Object.assign(item, {parent_radius: 300});
        var markingPoint = new MarkingPoint(item);
        markings.add(markingPoint);

        var pos = THREE.getPosition(item.pos[0] + 90, item.pos[1], item.parent_radius);
        // console.log(pos)
        // markingPoint.position.set(pos.x, pos.y, pos.z);
        markingPoint._pos = pos;
        fonts.add(new MarkingFont(item));
    });
    scene.add(markings);
    scene.add(fonts);

    markings.children.forEach(marking => {
        new TWEEN.Tween(marking.position)
            .to(marking._pos, 3000)
            .easing(TWEEN.Easing.Quadratic.InOut).delay(1000)
            .onStart(function () {})
            .onUpdate(function () {
            })
            .onComplete(function () {})
            .start();
    })

    // // 线
    // var geo = new THREE.Geometry();
    // geo.vertices.push(new THREE.Vector3(0, 0, 0));
    // geo.vertices.push(new THREE.Vector3().copy(obj.position));
    // var link = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#0000ff' }));
    // link.scale.set(0.000001, 0.000001, 0.000001);
    // new TWEEN.Tween(link.scale).to({ x: 1, y: 1, z: 1 }, 1000).easing(TWEEN.Easing.Exponential.InOut).delay(0).start();
    
    // scene.add(link);
    // sphere.add(link); // link 位置相对于其加入的 object
}

// 由于屏幕的尺寸改变，我们需要更新渲染器的尺寸和相机的纵横比
function handleWindowResize() {
    // 更新渲染器的高度和宽度以及相机的纵横比
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    // renderer2d.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH/HEIGHT;
    camera.updateProjectionMatrix();
}

// 光源
var hemisphereLight, shadowLight; // 半球光, 方向光
function createLights() {

    // 半球光就是渐变的光;
    // 第一个参数是天空的颜色，第二个参数是地上的颜色，第三个参数是光源的强度
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);

    // 方向光是从一个特定的方向的照射
    // 类似太阳，即所有光源是平行的
    // 第一个参数是关系颜色，第二个参数是光源强度
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    // 设置光源的方向。
    // 位置不同，方向光作用于物体的面也不同，看到的颜色也不同
    shadowLight.position.set(150, 350, 350);

    // 开启光源投影
    shadowLight.castShadow = true;

    // 定义可见域的投射阴影
    // shadowLight.shadow.camera.left = -400;
    shadowLight.shadowCameraLeft = -400;
    shadowLight.shadowCameraRight = 400;
    shadowLight.shadowCameraTop = 400;
    shadowLight.shadowCameraBottom = -400;
    shadowLight.shadowCameraNear = 1;
    shadowLight.shadowCameraFar = 1000;

    // 定义阴影的分辨率；虽然分辨率越高越好，但是需要付出更加昂贵的代价维持高性能的表现。
    // shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadowMapWidth = 2048;
    // shadowLight.shadow.mapSize.height = 2048;
    shadowLight.shadowMapHeight = 2048;

    // 为了使这些光源呈现效果，只需要将它们添加到场景中
    // scene.add(hemisphereLight);
    // scene.add(shadowLight);

    // 环境光源修改场景中的全局颜色和使阴影更加柔和
    ambientLight = new THREE.AmbientLight('#000', 1);
    scene.add(ambientLight);
}

// 用 Three.js 创建对象
// 如果你熟悉使用 3D 建模软件，你可以先在软件中建立物体且能简单地将它们导入到你的 Three.js 项目中

// 创建对象
// 1.创建几何体
// 2.创建材质
// 3.将它们传入网格
// 4.将网格添加至场景

function loop () {
    // var lineNum = 128;
    // drawCount++;
    // if (drawCount < lineNum) {
    //     line.geometry.setDrawRange(0, drawCount)
    // } 
    // else if (drawCount < lineNum * 2) {
    //     drawCount++;
    //     line.geometry.setDrawRange(drawCount - lineNum, lineNum)
    // }

    TWEEN.update();

    // 渲染场景
    renderer.render(scene, camera);

    // 2D渲染
    // renderer2d.render( scene, camera );

    orbitControls.update();
    // controls.update();

    // 重新调用 render() 函数
    requestAnimationFrame(loop);

}
