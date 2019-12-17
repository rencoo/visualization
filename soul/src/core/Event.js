function Event (scene) {
    this.scene = scene
    this.scene.inits.push(this.init.bind(this))
}

Event.prototype.resizeHandler = function () {
    console.log('resize')
    let scene = this.scene
    scene.WIDTH = window.innerWidth
    scene.HEIGHT = window.innerHeight
    scene.renderer.setSize(scene.WIDTH, scene.HEIGHT)
    scene.camera.aspect = scene.WIDTH / scene.HEIGHT
    scene.camera.updateProjectionMatrix();
}

Event.prototype.keyHandler = function (e) {
    console.debug(e.keyCode)

    switch (e.keyCode) {
        case 32: // space
            this.scene.control.reset()
            break
        case 88: // x
            this.scene.control.autoRotate = !this.scene.control.autoRotate
            break
        default:
    }
}

Event.prototype.init = function () {
    window.addEventListener('keyup', this.keyHandler.bind(this), false)
    window.addEventListener('resize', this.resizeHandler.bind(this), false)
}

module.exports = Event
