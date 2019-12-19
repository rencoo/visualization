'use strict'
const THREE = require('three')

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
