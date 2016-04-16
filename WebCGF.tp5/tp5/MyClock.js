/**
 * MyClock
 * @constructor
 */
 	
 var angleH=0;
 var angleM=0;
 var angleS=0;

 function MyClock(scene) {
 	CGFobject.call(this,scene);
	this.scene = scene;
	this.sides = new MyCylinder(scene, 10, 5);
	this.top = new MyCircle(scene,10);
	this.hours = new MyClockHand(scene,0.6,1);
	this.minutes = new MyClockHand(scene,0.9,1);
	this.seconds = new MyClockHand(scene,0.9,0.5);



 	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

  MyClock.prototype.setAngleH = function(a) {
	angleH=a;
  }
  MyClock.prototype.setAngleM = function(a) {
	angleM=a;
  }
  MyClock.prototype.setAngleS = function(a) {
	angleS=a;
  }

 MyClock.prototype.display = function() {
 		
	var degToRad = Math.PI / 180.0;
	

	this.scene.pushMatrix();
		this.sides.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1);
		this.top.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-angleH*degToRad, 0 , 0, 1);
		this.scene.translate(0, -1, 1.1);
		this.hours.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-angleM*degToRad, 0 , 0, 1);
		this.scene.translate(0, -1, 1.1);
		this.minutes.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-angleS*degToRad, 0 , 0, 1);
		this.scene.translate(0, -1, 1.1);
		this.seconds.display();
	this.scene.popMatrix();



	this.primitiveType = this.scene.gl.TRIANGLES;

 };
