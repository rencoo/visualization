'use strict'
const THREE = require('../../lib/three.r86')
const TWEEN = require('../../lib/tween.js')

// 组成对象模型的子模型
const MarkingPoint = require('../../scenes/MarkingPoint')

// 视图层
// 将模型数据(javascript对象)渲染成场景视图中的 THREE 物体
const loadUtil = {
    loadObject (scene, options) {
        options = options || {}
    
        var updateObject = function (obj) {
            var object = new THREE.Object3D()
            object.add(obj)

            // 三维物体需要淡入显示
            if (options.delay) {
                if (obj.userData) {
                    console.log(obj.userData)
                }
                obj.material.endOpacity = obj.material.opacity // 最终显示透明度
                obj.material.opacity = 0
                new TWEEN.Tween(obj.material)
                    .to({ opacity: obj.material.endOpacity }, options.delays.duration)
                    .easing(TWEEN.Easing.Linear.None)
                    .delay(options.delays.delay)
                    .start();
            }

            // 三维物体是否统一从起始坐标运动至目标坐标
            if (options.move) {
                // 设置初始值 startPos
                object.position.set(0, 0, 0) // 自行设置
            } else {
                // 否则直接设置物体至目标位置
                options.pos && 
                    object.position.set(options.pos.x, options.pos.y, options.pos.z)
            }
            
            scene.add(object) // TODO: 是否需要将 模型数据(js对象)的属性 拷贝到 场景中的THREE对象
            // TODO: 性能优化, 延迟加载 ? 延迟加入场景的时间(渲染上的优化, 还有数据请求上的优化)

            // 三维物体需要运动
            if (options.move) {
                // 经纬度转化成三维坐标
                var endPos = THREE.getPosition(options.pos[0] + 90, options.pos[1], options.parent_radius)
                object.endPos = endPos

                new TWEEN.Tween(object.position)
                    .to(object.endPos, 3000)
                    .easing(TWEEN.Easing.Quadratic.InOut).delay(1000)
                    .onStart(function () {})
                    .onUpdate(function () {
                    })
                    .onComplete(function () {})
                    .start()
            }
        }

        if (options.jsonUrl) { // 加载json格式模型

        } else if (options.mtlUrl) { // 加载带贴图的obj格式模型

        } else if (options.objUrl) { // 加载不带贴图的obj格式模型

        } else if (options.type === 'person') { // 加载场景中代表person的物体
            var obj = new THREE.Object3D() // 容器

            var sphere = new MarkingPoint()
            // 其他需要管联至该对象的三维物体
            // ...

            obj.add(sphere)
            updateObject(obj)
        } else {

        }
    }
}

module.exports = loadUtil

// // 标记点及标记文字
// // var fonts = new THREE.Group();


// var pos = THREE.getPosition(item.pos[0] + 90, item.pos[1], item.parent_radius);
// markingPoint._pos = pos;
// // fonts.add(new MarkingFont(item));

// scene.add(markings);
// // scene.add(fonts);
