'use strict'
var $ = require('../lib/jquery.min.js')
var THREE = require('../lib/three.r86.js')

function MarkingFont(options) {
    if(options === undefined) {
        options = {};
    }

    var item = $('<div style="font-size:14px;color:#d7d7dc;margin-top:-1em;">'+ options.name +'</div>');

    item.click(function (evt) {
        console.log('2D click');
        // window.location.href = './detail.html?' + options.name
    }).hover(function () {
        $(this).css("color", "#3dd4db");
    }, function () {
        $(this).css("color", "#3dd4db");
    });

    var font = new THREE.CSS2DObject(item[0]);

    return font;
}

module.exports = MarkingFont
