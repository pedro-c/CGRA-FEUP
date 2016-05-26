
function MyDropSite(scene) {

	CGFobject.call(this,scene);
	
	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();
	

	this.x=12;
	this.y=0.1;
	this.z=2;
	this.a=0;
	this.b=0;
	this.c=0;


	//this.initBuffers();
};

MyDropSite.prototype = Object.create(CGFobject.prototype);
MyDropSite.prototype.constructor=MyDropSite;


MyDropSite.prototype.display=function(){

	this.scene.pushMatrix();
		this.scene.scale(1,.1,1);
		this.cube.display();
	this.scene.popMatrix();

	this.primitiveType = this.scene.gl.TRIANGLES;

 };

