


 function MyDrone(scene, minS, maxS, minT, maxT) {
 	CGFobject.call(this,scene);

    this.scene = scene;
 	
 	this.arm1 = new MyCylinder(scene);
 	this.arm2 = new MyCylinder(scene);
 	this.base1 = new MyCylinder(scene);
 	this.base2 = new MyCylinder(scene);
 	this.base3 = new MyCylinder(scene);
 	this.base4 = new MyCylinder(scene);
 	this.lamp = new MyLamp(scene,20,20);
 	this.leg1 = new MyDroneLeg(scene);

 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.display=function(){

 	var degToRad = Math.PI / 180.0;

	this.scene.pushMatrix();
		this.scene.translate(0,0,0);
		this.scene.scale(0.63,0.63,0.63);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.lamp.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-1.5);
		this.scene.scale(0.15,0.15,3);
		this.arm1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1.5,0,0);
		this.scene.rotate(-90*degToRad,0,1,0);
		this.scene.scale(0.15,0.15,3);
		this.arm2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1.5,-0.25,0);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.25,0);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.25,1.5);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base3.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.25,-1.5);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base3.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.leg1.display();
	this.scene.popMatrix();


this.primitiveType = this.scene.gl.TRIANGLES;


 }

/*
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
*/
MyDrone.prototype.setAngle = function(a) {

}