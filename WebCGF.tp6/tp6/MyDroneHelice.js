/**
 * MyDroneHelice
 * @constructor
 */
 function MyDroneHelice(scene,b) {
 	CGFobject.call(this,scene);

 	this.arm1 = new MyCylinder(scene);
 	this.lamp = new MyLamp(scene,20,20);
 	this.b=b;

 	this.heliceSpeed = 0;
 	this.factor = 1;

 	this.initBuffers();
 };

 MyDroneHelice.prototype = Object.create(CGFobject.prototype);
 MyDroneHelice.prototype.constructor = MyDroneHelice;

 MyDroneHelice.prototype.display=function(){

   var degToRad = Math.PI / 180.0;

   this.scene.pushMatrix()
        this.scene.scale(0.2,0.2,0.2);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.lamp.display();
   this.scene.popMatrix();

   this.scene.pushMatrix()
        this.scene.translate(0.5,0,0);
		this.scene.scale(1,0.02,0.06);
		this.scene.rotate(-90*degToRad,0,1,0);
		this.arm1.display();
   this.scene.popMatrix();


	this.primitiveType = this.scene.gl.TRIANGLES;
 }

  MyDroneHelice.prototype.updateHelice = function() {

     this.b+=(this.heliceSpeed*this.factor);

  }

  MyDroneHelice.prototype.updateHeliceSpeed = function(speed) {

     this.heliceSpeed=speed/5;

  }

   MyDroneHelice.prototype.setFactor = function(factor) {

     this.factor=factor;

  }



 