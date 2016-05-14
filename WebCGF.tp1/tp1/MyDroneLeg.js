/**
 * MyDroneLeg
 * @constructor
 */
 function MyDroneLeg(scene, slices, stacks) {
 	CGFobject.call(this,scene);

	//if slices not define, set to 6
 	slices = typeof slices !== 'undefined' ? slices : 6;

 	//if stacks not define, set to 5
 	stacks = typeof stacks !== 'undefined' ? stacks : 5;
	
	this.slices = slices;
	this.stacks = stacks;


 	this.initBuffers();
 };

 MyDroneLeg.prototype = Object.create(CGFobject.prototype);
 MyDroneLeg.prototype.constructor = MyDroneLeg;

 MyDroneLeg.prototype.initBuffers=function(){

   var degToRad = Math.PI / 180.0;
   var n = 2*Math.PI / this.sides;

  	this.vertices = [];
	this.normals = [];
	this.indices = [];

	
	var p1x = 1;
	var p1y = 1;
	var p1z = 0;

	var t1x = 1;
	var t1y = 0;
	var t1z = 0;

	var p2x = 5;
	var p2y = 5;
	var p2z = 0;
	
	var t2x = 1;
	var t2y = 10;
	var t2z = 0;

	
	for(var i = 0; i < this.stacks+1; i++){
		
		var t = i / (this.stacks);
		var x =(2.0*t*t*t - 3.0*t*t + 1.0) * p1x  
         + (t*t*t - 2.0*t*t + t) * t1x
         + (-2.0*t*t*t + 3.0*t*t) * p2x
         + (t*t*t - t*t) * t2x;
		var y =(2.0*t*t*t - 3.0*t*t + 1.0) * p1y  
         + (t*t*t - 2.0*t*t + t) * t1y
         + (-2.0*t*t*t + 3.0*t*t) * p2y
         + (t*t*t - t*t) * t2y;
		var z = (2.0*t*t*t - 3.0*t*t + 1.0) * p1z  
         + (t*t*t - 2.0*t*t + t) * t1z
         + (-2.0*t*t*t + 3.0*t*t) * p2z
         + (t*t*t - t*t) * t2z;


		for(var q = 0; q < this.sides; q++)
		{
			this.vertices.push(Math.cos(q * n),Math.sin(q * n), z);
			this.normals.push(Math.cos(q * n),Math.sin(q * n), 0);
		}

	}


	for(var q = 0; q < this.stacks; q++){
		for(var i = 0; i < this.sides; i++)
		{
			this.indices.push(this.slices*q+i,this.slices*q+i+1,this.slices*(q+1)+i);
			if (i != (this.slices - 1)) {
				this.indices.push(this.slices*(q+1)+i+1,this.slices*(q+1)+i,this.slices*q+i+1);
			}
			else {
				this.indices.push(this.slices*q,this.slices*q+i+1,this.slices*q+i);
			}
			
		}

	}

	this.primitiveType = this.scene.gl.TRIANGLES;

	this.initGLBuffers();
 }




 