var TWEEN = require('../libs/tween.js')
var THREE = require('../libs/three.r86.js')

// 初始化一些自定义在THREE上的方法
require('../init/THREE.init.js')

var Camera = require('../scenes/Camera.js')
var Renderer = require('../scenes/Renderer.js')
var Control = require('../scenes/Control.js')

// 继承自THREE.Scene
function Scene (el) {
    THREE.Scene.call(this)

    this.container = document.querySelector(el) || document.querySelector('body')
    this.WIDTH = this.container.offsetWidth || window.innerWidth
    this.HEIGHT = this.container.offsetHeight || window.innerHeight
    
    // 用于初始化事件
    this.inits = []
}

Scene.prototype = Object.create(THREE.Scene.prototype)

Scene.constructor = Scene

Scene.prototype.init = function () {
    // create scene, camera, renderer and control
    this.camera = new Camera(this.WIDTH, this.HEIGHT)
    this.renderer = new Renderer(this.WIDTH, this.HEIGHT)
    this.control = new Control(this.camera, this.renderer.domElement)

    this.container.appendChild(this.renderer.domElement)

    this.inits.length && this.inits.forEach(callback => {
        callback()
    })
}

Scene.prototype.render = function () {
    TWEEN.update()

    this.renderer.render(this, this.camera)
    this.control.update()

    requestAnimationFrame(this.render.bind(this))
}

Scene.prototype.start = function () {
    this.render()
}

module.exports = Scene
