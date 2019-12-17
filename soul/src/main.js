'use strict'

// 导入样式
import './css/main.css'

var THREE = require('./libs/three.r86.js')
var TWEEN = require('./libs/tween.js')

var Scene = require('./core/Scene.js')
var Event = require('./core/Event.js')

import { DATA } from './data/DATA.js'
import MarkingPoint  from './obj/MarkingPoint.js'

window.onload = async function () {
    // 请求数据
    // let response = await fetch()
    // let data = await response.json()
    let data = DATA.marking

    var scene = new Scene()
    // var event = new Event(scene)

    scene.init()
    scene.start()

    // scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    // 球体
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(300, 15, 15), new THREE.MeshBasicMaterial({ color: '#c471ed', wireframe: true }));
    sphere.position.set(0,0,0);
    scene.add(sphere);

    data && data.forEach(item => {
        // 标记点及标记文字
        var markings = new THREE.Group();
        // var fonts = new THREE.Group();

        item = Object.assign(item, {parent_radius: 300});
        var markingPoint = new MarkingPoint(item);
        markings.add(markingPoint);

        var pos = THREE.getPosition(item.pos[0] + 90, item.pos[1], item.parent_radius);
        markingPoint._pos = pos;
        // fonts.add(new MarkingFont(item));
       
        scene.add(markings);
        // scene.add(fonts);

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
    })
}
