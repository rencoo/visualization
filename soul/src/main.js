'use strict'

// 导入样式
import './css/main.css'

// 初始化自定义THREE方法
import './init/THREE.init.js'
// 导入场景类
import Scene3D from './scenes/Scene3D.js'

var TWEEN = require('./libs/tween.js')
var THREE = require('./libs/three.r86.js')

// import MarkingFont from './obj/MarkingFont.js'
import MarkingPoint  from './obj/MarkingPoint.js'

import { DATA } from './data/DATA.js'

var WIDTH, HEIGHT, scene, camera, renderer, control;

window.addEventListener('load', init, false);
function init() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    // 创建3D场景, 相机, 渲染器和控制器
    scene = new Scene3D(WIDTH, HEIGHT)
    camera = scene.camera
    renderer = scene.renderer
    control = scene.control

    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    var container = document.querySelector('body');
    container.appendChild(renderer.domElement);

    // 监听屏幕, 缩放屏幕更新相机和渲染器的尺寸
    window.addEventListener('resize', handleWindowResize, false);
    
    // 球体
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(300, 15, 15), new THREE.MeshBasicMaterial({ color: '#0000ff', wireframe: true }));
    sphere.position.set(0,0,0);
    scene.add(sphere);

    render();

    // 标记点及标记文字
    var markings = new THREE.Group();
    // var fonts = new THREE.Group();

    DATA.marking.forEach(item => {
        item = Object.assign(item, {parent_radius: 300});
        var markingPoint = new MarkingPoint(item);
        markings.add(markingPoint);

        var pos = THREE.getPosition(item.pos[0] + 90, item.pos[1], item.parent_radius);
        markingPoint._pos = pos;
        // fonts.add(new MarkingFont(item));
    });
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

}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH/HEIGHT;
    camera.updateProjectionMatrix();
}

function render () {
    TWEEN.update()

    renderer.render(scene, camera)

    control.update()

    requestAnimationFrame(render)
}
