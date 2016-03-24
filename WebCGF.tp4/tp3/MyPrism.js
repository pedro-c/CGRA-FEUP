/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	var n = Math.PI / 180;

	this.vertices = [];
	this.normals = [];
	this.indices = [];

	for(i = 0; i < 6; i++)
	{
		this.vertices.push(Math.cos(i * 60 * n), Math.sin(i* 60 * n), 0);
		this.vertices.push(Math.cos(i * 60 * n), Math.sin(i* 60 * n), 1);
		this.vertices.push(Math.cos((i+1) * 60 * n), Math.sin((i+1)* 60 * n), 0);
		this.vertices.push(Math.cos((i+1) * 60 * n), Math.sin((i+1)* 60 * n), 1);

		this.indices.push(i*4, i*4+2, i*4+3);
		this.indices.push(i*4+1, i*4, i*4+3);

		this.normals.push(Math.cos(i * 60 * n + 30), Math.sin(i * 60 * n + 30), 0);
		this.normals.push(Math.cos(i * 60 * n + 30), Math.sin(i * 60 * n + 30), 0);
		this.normals.push(Math.cos(i * 60 * n + 30), Math.sin(i * 60 * n + 30), 0);
		this.normals.push(Math.cos(i * 60 * n + 30), Math.sin(i * 60 * n + 30), 0);
	}

/*
 	this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

 	this.normals = [
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1
 	];
*/
 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.initGLBuffers();
 };
