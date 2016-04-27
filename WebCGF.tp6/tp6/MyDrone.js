


 function MyDrone(scene, minS, maxS, minT, maxT) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.initBuffers = function() {

 	this.vertices = [
 	0.5, 0.3, 0,
 	-0.5, 0.3, 0,
 	0, 0.3, 2,
 	];

 	this.indices = [
 	0, 1, 2, 
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;

    this.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    ];

 	this.initGLBuffers();
 };

MyDrone.prototype.setAngle = function(a) {

}