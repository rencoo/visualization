'use strict'
// style
require('./style/main.css')

// lib
var THREE = require('three')

require('./lib/OrbitControls.js')
require('./lib/CSS2DRenderer.js')

// 初始化一些自定义在THREE上的方法
require('./lib/lib-mixin/THREE.mixin.js')

// core
var Scene = require('./core/Scene.js')
var Manage = require('./core/Manage.js')
var Event = require('./core/Event.js')
var Background = require('./core/Background.js')

// util
var createUtil = require('./core/util/createUtil')

// data
var TEST_DATA = require('./data/TEST_DATA.js')

// 入口层获得数据
window.onload = function () {
    var scene = new Scene()
    var event = new Event(scene)
    var manage = new Manage(scene)
    var background = new Background(scene)

    // 请求数据
    // (async function () {
    //     let response = await fetch()
    //     let data = await response.json()
    // })

    let data = TEST_DATA.marking
    data && data.forEach(item => {
        createUtil.createPerson(item, manage)
    })

    // console.log(manage.models) // 模型数据(javascript 对象)
    // console.log(scene) // THREE场景模型数据
    
    scene.init()
    scene.start()
}
