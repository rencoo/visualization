var THREE = require('../libs/three.r86.js')

function Camera (w, h) {
    var fieldOfView = 60
    var aspectRatio = w / h
    var nearPlane = 1
    var farPlane = 10000

    var camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    )

    // 设置相机位置
    camera.position.set(0, 0, 1000)
    // 设置相机朝向
    camera.lookAt(0, 0, 0)

    return camera
}

module.exports = Camera
