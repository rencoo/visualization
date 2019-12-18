var $ = require('../lib/jquery.min.js')
var THREE = require('../lib/three.r86.js')

export default function MarkingFont(options) {
    if(options === undefined) {
        options = {};
    }

    var item = $('<div style="font-size:10px;color:#F4A460;margin-top:-1em;">'+ options.name +'</div>');

    item.click(function (evt) {
        console.log('2D click');
        // window.location.href = './index1.html?' + options.name
    }).hover(function () {
        $(this).css("color", "#00ff00");
    }, function () {
        $(this).css("color", "#ffffff");
    });

    var font = new THREE.CSS2DObject(item[0]);

    // var a = Math.PI * Math.random();
    // var b = 2 * Math.PI * Math.random();
    // obj.position.x = (300 + 10 * Math.random()) * Math.sin(a) * Math.cos(b);
    // obj.position.y = (300 + 10 * Math.random()) * Math.sin(a) * Math.sin(b);
    // obj.position.z = (300 + 10 * Math.random()) * Math.cos(a);
    // sphere.add(obj);

    // 获取标记点坐标
	var fontPos = THREE.getPosition(options.pos[0] + 90, options.pos[1], options.parent_radius);
    font.position.set(fontPos.x + 15, fontPos.y - 10, fontPos.z);
    
    return font;
}
