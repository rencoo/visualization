var THREE = require('../three.r86.js')

// 初始化一些自定义方法
// 经纬度转化成空间三维坐标
if (!THREE.getPosition) {
    THREE.getPosition = function (longitude, latitude, radius) {
        var lg = THREE.Math.degToRad(longitude);
        var lt = THREE.Math.degToRad(latitude);
        var temp = radius * Math.cos(lt);
        var x = temp * Math.sin(lg);
        var y = radius * Math.sin(lt);
        var z = temp * Math.cos(lg);
        return {
            x: x,
            y: y,
            z: z
        }
    }
}