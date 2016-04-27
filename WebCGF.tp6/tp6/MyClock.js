/**
 * MyClock
 * @constructor
 */
 	
 var angleH=0;
 var angleM=0;
 var angleS=0;

 function MyClock(scene, hours, minutes, secons) {
 	CGFobject.call(this,scene);
	

 	hours = typeof hours !== 'undefined' ? hours : 0;
 	minutes = typeof minutes !== 'undefined' ? minutes : 0;
 	seconds = typeof seconds !== 'undefined' ? seconds : 0;

	

	this.setAngleH(hours);
	this.setAngleM(minutes);
	this.setAngleS(seconds);

	this.scene = scene;
	this.sides = new MyCylinder(scene, 10, 5);
	this.top = new MyCircle(scene,10);
	this.hours = new MyClockHand(scene,0.6,1);
	this.minutes = new MyClockHand(scene,0.8,1);
	this.seconds = new MyClockHand(scene,0.8,0.5);
	this.time = -1;



 	
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

   MyClock.prototype.update = function() {

	this.setAngleH(angleH+360/60/60/60);
	this.setAngleM(angleM+360/60/60);
	this.setAngleS(angleS+360/60);
		  		

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
		this.scene.translate(0, 0, 1.1);
		this.scene.rotate(-angleH*degToRad+180*degToRad, 0 , 0, 1);
		this.hours.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1.1);
		this.scene.rotate(-angleM*degToRad+180*degToRad, 0 , 0, 1);
		this.minutes.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();	
		this.scene.translate(0, 0, 1.1);
		this.scene.rotate(-angleS*degToRad+180*degToRad, 0 , 0, 1);
		this.seconds.display();
	this.scene.popMatrix();



	this.primitiveType = this.scene.gl.TRIANGLES;

 };
