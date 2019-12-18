'use strict'
const THREE = require('../lib/three.r86')

function Background (scene) {
    this.scene = scene
    this.scene.inits.push(this.init.bind(this))
}

Background.prototype.createLight = function () {
    this.light = new THREE.PointLight(0xffffff, 1.5);
    this.light.position.set(0, 1000, 0);
    this.light.options = options;

    this.scene.add(this.light)
}

Background.prototype.createGrid = function () {
    this.grid = new THREE.Points(
        new THREE.PlaneBufferGeometry(10000, 10000, 128, 128),
        new THREE.PointsMaterial({
            size: 1,
            color: 0x2196f3,
            transparent: true,
            opacity: 0.8
        })
    )
    this.grid.position.y = 0;
    this.grid.rotation.x = -Math.PI / 2;
    this.grid.options = options

    this.scene.add(SPACE.background.grid)
}

Background.prototype.createColor = function () {
    this.scene.background = new THREE.Color( '#FFA99F' )
}

Background.prototype.createFog = function () {
    // 在场景中添加雾的效果；样式上使用和背景一样的颜色
    this.scene.fog = new THREE.Fog('#FFA99F', 100, 950)
}

Background.prototype.createBall = function () {
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(300, 15, 15), new THREE.MeshBasicMaterial({ color: '#c471ed', wireframe: true }));
    this.ball.position.set(0,0,0);
    
    this.scene.add(this.ball);
}

Background.prototype.init = function () {
    this.createColor()
    this.createBall()
}

module.exports = Background
