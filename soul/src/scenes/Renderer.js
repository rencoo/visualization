var THREE = require('../libs/three.r86.js')

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

module.exports = Renderer
