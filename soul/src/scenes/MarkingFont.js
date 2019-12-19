'use strict'
const THREE = require('three')

function MarkingFont(options) {
    if(options === undefined) {
        options = {};
    }

    var item = document.createElement('div')
    var textNode = document.createTextNode(options.name)
    item.setAttribute('style', "font-size:0.8em;color:#d7d7dc;margin-top:-1em;")
    item.append(textNode)
    item.addEventListener('click', function () {
        console.log('2D click')
        // window.location.href = './detail.html?' + options.name
    })
    item.addEventListener('mouseenter', function () {
        this.style.color = "#3dd4db"
    })

    var font = new THREE.CSS2DObject(item);

    return font;
}

module.exports = MarkingFont
