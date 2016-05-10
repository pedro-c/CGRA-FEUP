/**
 * MyDroneLeg
 * @constructor
 */
 function MyDroneLeg(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 MyDroneLeg.prototype = Object.create(CGFobject.prototype);
 MyDroneLeg.prototype.constructor = MyDroneLeg;


 