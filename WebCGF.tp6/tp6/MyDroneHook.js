/**
 * MyDroneHook
 * @constructor
 */
 function MyDroneHook(scene, slices, stacks) {
 	CGFobject.call(this,scene);

	//if slices not define, set to 6
 	slices = typeof slices !== 'undefined' ? slices : 6;

 	//if stacks not define, set to 5
 	stacks = typeof stacks !== 'undefined' ? stacks : 5;
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyDroneHook.prototype = Object.create(CGFobject.prototype);
 MyDroneHook.prototype.constructor = MyDroneHook;

 MyDroneHook.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	//Sets the number os sides;
 	var sides = this.slices;
 	var stacks = this.stacks;

	var n = 2*Math.PI / sides;

	this.vertices = [];
	this.normals = [];
	this.indices = [];
	this.texCoords =[];
	var p1y = 0;
	var p1z = 0;
	var p1x = 0;

	var t1y = 7;
	var t1z = -10;
	var t1x = 0;

	var p2y = 5;
	var p2z = 3;
	var p2x = 0;
	
	var t2y = -10;
	var t2z = 10;
	var t2x = 0;
	
	for(var q = 0; q < this.stacks+1; q++){
		
		var z1 = (q/this.stacks);

		//hermite curve divided in its 3 variables
		var t = q / (this.stacks);
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

		for(var i = 0; i < sides/2; i++)
		{
			this.vertices.push(Math.cos(i * n)+x,Math.sin(i * n)+y, z);
			this.normals.push(Math.cos(i * n)+x,Math.sin(i * n)+y, 0);
			this.texCoords.push(0.5*i/sides,0.5*i/sides,0);
			this.texCoords.push(0.5*i/sides,0.5*i/sides,z);
		}
		for(var i = sides/2; i < sides; i++)
		{
			this.vertices.push(Math.cos(i * n)+x,Math.sin(i * n)+y, z+1);
			this.normals.push(Math.cos(i * n)+x,Math.sin(i * n)+y, 0);
			this.texCoords.push(0.5*i/sides,0.5*i/sides,0);
			this.texCoords.push(0.5*i/sides,0.5*i/sides,z);
		}

	}


	for(var q = 0; q < this.stacks; q++){
		for(var i = 0; i < sides; i++)
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
 };

