/**
 * myChair
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myChair(scene) {
	CGFobject.call(this,scene);

	this.cube= new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();

};

myChair.prototype = Object.create(CGFobject.prototype);
myChair.prototype.constructor=myChair;

myChair.prototype.display = function(){
	
	//pernas da cadeira
	this.scene.pushMatrix();
	this.scene.translate(0.95,2.1,0.95);
	this.scene.scale(0.1,4.2,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.95,2.1,0.95);
	this.scene.scale(0.1,4.2,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0.95,1,-0.95);
	this.scene.scale(0.1,2.0,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.95,1,-0.95);
	this.scene.scale(0.1,2.0,0.1);
	this.cube.display();
	this.scene.popMatrix();


	//tampo da cadeira
	this.scene.pushMatrix();
	this.scene.translate(0,2.05,0);
	this.scene.scale(2.0,0.1,2.0);
	this.cube.display();
	this.scene.popMatrix();

	//encosto da cadeira
	this.scene.pushMatrix();
	this.scene.translate(0,3.7,0.95);
	this.scene.scale(1.8,1,0.1);
	this.cube.display();
	this.scene.popMatrix();




};