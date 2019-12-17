var THREE = require('../libs/three.r86.js')

// 初始化一些自定义在THREE上的方法
require('../init/THREE.init.js')

var Camera = require('./Camera.js')
var Renderer = require('./Renderer.js')
var Control = require('./Control.js')

// 继承自THREE.Scene
function Scene3D (w, h) {
    THREE.Scene.call(this)

    // 用于设置相机的横纵比和渲染器的代销
    this.WIDTH = w
    this.HEIGHT = h

    // 创建相机
    this.camera = new Camera(this.WIDTH, this.HEIGHT)

    // 创建渲染器
    this.renderer = new Renderer(this.WIDTH, this.HEIGHT)

    // 创建控制器
    this.control = new Control(this.camera, this.renderer.domElement)
}

Scene3D.prototype = Object.create(THREE.Scene.prototype)

Scene3D.constructor = Scene3D

module.exports = Scene3D
