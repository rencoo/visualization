var THREE = require('../libs/three.r86.js')
import '../libs/OrbitControls.js'

function Scene3D (w, h) {
    THREE.Scene.call(this)

    // 用于设置相机的横纵比和渲染器的代销
    this.WIDTH = w
    this.HEIGHT = h

    // 创建相机
    this.camera = new Camera(this.WIDTH, this.HEIGHT)
    // 设置相机位置
    this.camera.position.set(0, 0, 100)
    // 设置相机朝向
    this.camera.lookAt(0, 0, 0)

    // 创建渲染器
    this.renderer = new Renderer(this.WIDTH, this.HEIGHT)

    // 创建控制器
    this.control = new Control(this.camera, this.renderer.domElement)
}

Scene3D.prototype = Object.create(THREE.Scene.prototype)
Scene3D.constructor = Scene3D

// 相机类
function Camera (w, h) {
    var fieldOfView = 20
    var aspectRatio = w / h
    var nearPlane = 1
    var farPlane = 10000

    return new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    )
}

// 渲染器类
function Renderer (w, h) {
    var renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true, // required to support .toDataUrl() 解决base64图片显示黑色的问题
    })

    renderer.setSize(w, h)
    renderer.shadowMapEnabled = true

    return renderer
}

// 控制器类
function Control (camera, renderDom) {
    var control = new THREE.OrbitControls(camera, renderDom)
    // control.maxPolarAngle = Math.PI * 0.495
    // control.enableZoom = true
    // control.enablePan = true
    // control.minDistance = 0
    control.maxDistance = 420

    return control
}