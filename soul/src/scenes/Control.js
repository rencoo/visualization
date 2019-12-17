var THREE = require('../libs/three.r86.js')
require('../libs/OrbitControls.js')

function Control (camera, renderDom) {
    var control = new THREE.OrbitControls(camera, renderDom)
    // control.maxPolarAngle = Math.PI * 0.495
    control.enableZoom = true
    control.enablePan = true
    control.autoRotate = true
    control.rotateSpeed = 0.2
    control.minDistance = 50
    control.maxDistance = 2000

    return control
}

module.exports = Control
