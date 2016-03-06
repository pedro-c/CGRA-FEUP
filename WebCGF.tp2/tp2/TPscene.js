
function TPscene() {
    CGFscene.call(this);
}

TPscene.prototype = Object.create(CGFscene.prototype);
TPscene.prototype.constructor = TPscene;

TPscene.prototype.init = function (application) {
    CGFscene.prototype.init.call(this, application);

    this.initCameras();

    this.initLights();


    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

	this.axis=new CGFaxis(this);

	this.obj = new MyObject(this);
    this.cube = new MyUnitCube(this);
    this.cubeQuad = new MyUnitCubeQuad(this);
    //this.quad = new MyQuad(this);
    this.table = new myTable(this);
    this.floor = new myFloor(this);
    this.chair = new myChair(this);

};

TPscene.prototype.initLights = function () {

	this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0,1.0,1.0,1.0);
    this.lights[0].enable();
    this.lights[0].update();
 
};

TPscene.prototype.initCameras = function () {
    this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
};

TPscene.prototype.setDefaultAppearance = function () {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
 	
};

TPscene.prototype.display = function () {
	// ---- BEGIN Background, camera and axis setup
	
	// Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation
	this.updateProjectionMatrix();
    this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Draw axis
	this.axis.display();

	this.setDefaultAppearance();
	
	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section


	// ---- BEGIN Primitive drawing section
	

	//this.obj.display();

	//this.cube.display();



	
	//this.cube.display();
	

	//this.scene.pushMatrix();
	//
	//this.translate(2,0,0);
	//this.cubeQuad.display();

	//this.scene.popMatrix();

	//this.quad.display();
	

	this.translate(4,0.05,3);
	this.table.display();

	this.setAmbient(10,0.6, 0.8, 0);
    this.setDiffuse(20, 0.4, 0.8, 1.0);
    this.setSpecular(10, 40, 0.8, 1.0);
    this.setShininess(10.0);
	
	this.floor.display();
	this.translate(0,0,1.5)


	this.setAmbient(200,200,0.0, 0);
    this.setDiffuse(20, 0.4, 0.8, 1.0);
    this.setSpecular(10,40, 0.8, 1.0);
    this.setShininess(10.0);
	this.chair.display();


	// ---- END Primitive drawing section

};
