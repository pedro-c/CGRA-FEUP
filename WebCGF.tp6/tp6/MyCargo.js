
function MyCargo(scene) {

	CGFobject.call(this,scene);
	
	this.cube = new MyUnitCubeQuad(this.scene);
	this.hook = new MyDroneLeg(this.scene);
	this.hook2 = new MyDroneLeg(this.scene);
	
	

	this.x=2;
	this.y=0.5;
	this.z=2;
	this.a=0;
	this.b=0;
	this.c=0;


	this.initBuffers();
};

MyCargo.prototype = Object.create(CGFobject.prototype);
MyCargo.prototype.constructor=MyCargo;


MyCargo.prototype.display=function(){

	var degToRad = Math.PI / 180.0;

	this.scene.pushMatrix();
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.25,0.5,0);
		this.scene.scale(0.025,0.025,0.025);
		this.scene.rotate(-90 * degToRad, 0, 1, 0);
		this.hook.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.25,0.5,0);
		this.scene.scale(0.025,0.025,0.025);
		this.scene.rotate(90 * degToRad, 0, 1, 0);
		this.hook2.display();
	this.scene.popMatrix();

	this.primitiveType = this.scene.gl.TRIANGLES;

 };

