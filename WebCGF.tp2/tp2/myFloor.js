/**
 * myFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myFloor(scene) {
	CGFobject.call(this,scene);

	this.cube= new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();

};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function(){
	
	//tampo
	this.scene.pushMatrix();
	this.scene.scale(8.0,0.1,6.0);
	this.cube.display();
	this.scene.popMatrix();

};