function Event (scene) {
    this.scene = scene
    this.scene.inits.push(this.init)
}

Event.prototype.resizeHandler = function () {
    let scene = this.scene
    scene.renderer.setSize(scene.WIDTH, scene.HEIGHT)
    scene.camera.aspect = scene.WIDTH / scene.HEIGHT
    scene.camera.updateProjectionMatrix();
}

Event.prototype.keyHandler = function (e) {
    console.debug(e.keyCode)

    switch (e.keyCode) {
        case 32: // space
            this.scene.controls.reset()
            break
        case 88: // x
            this.scene.controls.autoRotate = !this.scene.controls.autoRotate
            break
        default:
    }
}

Event.prototype.init = function () {
    var _this = this
    console.log(this.resizeHandler)
    // window.addEventListener('keyup', _this.keyHandler.bind(_this), false)
    // window.addEventListener('resize', _this.resizeHandler.bind(_this), false)
}

module.exports = Event
