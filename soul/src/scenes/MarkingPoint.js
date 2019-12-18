var THREE = require('../lib/three.r86.js')

function MarkingPoint (options) {
	options = options || {};
	var radius = options.radius || 6;
	var geometry = new THREE.SphereGeometry(radius, radius, radius);
	var material = new THREE.MeshBasicMaterial({
		color: options.color || '#f64f59',
	});
	var dot = new THREE.Mesh(geometry, material);
	// 获取标记点坐标
	// var dotPos = THREE.getPosition(options.pos[0] + 90, options.pos[1], options.parent_radius);
	// dot.position.set(dotPos.x, dotPos.y, dotPos.z);

	return dot;
}

module.exports = MarkingPoint
