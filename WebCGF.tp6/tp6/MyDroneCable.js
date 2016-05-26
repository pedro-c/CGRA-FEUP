/**
 * MyDroneCable
 * @constructor
 */
 function MyDroneCable(scene, slices, stacks) {
 	CGFobject.call(this,scene);

	//if slices not define, set to 6
 	slices = typeof slices !== 'undefined' ? slices : 6;

 	//if stacks not define, set to 5
 	stacks = typeof stacks !== 'undefined' ? stacks : 5;
	
	this.slices = slices;
	this.stacks = stacks;

	this.t2y=5;
	this.t2z=25

	this.maxCableLength = 5;

	this.length = 0;

 	this.initBuffers();
 };

 MyDroneCable.prototype = Object.create(CGFobject.prototype);
 MyDroneCable.prototype.constructor = MyDroneCable;

 MyDroneCable.prototype.initBuffers = function() {
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
	this.texCoords = [];


	
	for(var q = 0; q < this.stacks+1; q++){
		
		var z = (q/this.stacks);



		for(var i = 0; i < sides; i++)
		{
			this.vertices.push(Math.cos(i * n),Math.sin(i * n), z);
			this.normals.push(Math.cos(i * n),Math.sin(i * n), 0);
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

	MyDroneCable.prototype.increaseDegree = function(){

	
	};
	MyDroneCable.prototype.decreaseDegree = function(){

	};



MyDroneCable.prototype.dropCable = function(){
	if(this.length < this.maxCableLength){
		this.length+=0.1;
	}
}

MyDroneCable.prototype.liftCable = function(){
	if(this.length > 0){
		this.length-=0.1;
	}
}

MyDroneCable.prototype.update = function(currTime) {}