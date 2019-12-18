'use strict'
const loadUtil = require('./util/loadUtil.js')

// 控制层
// 管理所有需要加载的模型数据(javascript对象)
// 将模型数据渲染成场景视图中的 THREE 物体
function Manage (scene) {
    this.scene = scene
    // 场景中所有从后端请求的模型数据(javascript对象)集合
    this.models = {
        // "person" : {}
    }
    this.scene.inits.push(this.init.bind(this))
}

Manage.prototype.init = function () {
    var scene = this.scene
    var models = this.models
    load(models)

    function load (models) {
        for (var key in models) {
            if (models[key].isRender === true) {
                loadUtil.loadObject(scene, models[key])
            } else {
                load(models[key])
            }
        }
    }
}

module.exports = Manage
