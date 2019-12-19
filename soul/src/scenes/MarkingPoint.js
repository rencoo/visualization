'use strict'
var THREE = require('../lib/three.r86.js')

function MarkingPoint (options) {
	options = options || {};
	var radius = options.radius || 6;
	var geometry = new THREE.SphereGeometry(radius, radius, radius);
	var material = new THREE.MeshBasicMaterial({
		color: options.color || '#fbd8d8',
	});
	var dot = new THREE.Mesh(geometry, material);

	return dot;
}

module.exports = MarkingPoint
