/**
 * myLamp
 * @constructor
 */
 function myLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);

	//if slices not define, set to 6
 	slices = typeof slices !== 'undefined' ? slices : 6;

 	//if stacks not define, set to 5
 	stacks = typeof stacks !== 'undefined' ? stacks : 5;
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 myLamp.prototype = Object.create(CGFobject.prototype);
 myLamp.prototype.constructor = myLamp;

 myLamp.prototype.initBuffers = function() {
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

	

	this.vertices = [];
	this.normals = [];
	this.indices = [];
	
	for(var q = 0; q < this.stacks+1; q++){
		
		var g = Math.PI/2/this.stacks;
		var n = 2*Math.PI / sides;
		var z = q/this.stacks;

		for(var i = 0; i < sides; i++)
		{
			this.vertices.push(Math.cos(i * n)*Math.cos(q *g),Math.sin(i * n)*Math.cos(q * g), Math.sin(q*g));
			this.normals.push(Math.cos(i * n)*Math.cos(q *g),Math.sin(i * n)*Math.cos(q * g), 0);
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
