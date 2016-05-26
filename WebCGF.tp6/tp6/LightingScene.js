var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;
var time=-1;


var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);
	

	this.textFlag=true;
	this.luz0 = true;
	this.luz1 = true;
	this.luz2 = true;
	this.luz3 = true;
	this.luz4 = true;
	this.clockMovement = true;
	this.droneSpeed = 1;
	this.heliceRotationFactor = 1;
	this.cargoFlag=0;
	this.dropFlag=0;

	this.initCameras();
	this.enableTextures(true);

	this.camo1="../resources/images/camo1.jpg";
	this.camo2="../resources/images/camo2png";
	this.yellow="../resources/images/yellow.png";
	this.homer = "../resources/images/homer.png";
	this.boss = "../resources/images/boss.png";
	this.AS = "../resources/images/aas.png";

	this.textures = [this.camo1,this.camo2,this.yellow, this.homer, this.boss, this.AS];
	this.currTexture = 3;
	this.textI=1;

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.wallLeft = new MyQuad(this,-1,2,-1,2);
	this.floor = new MyQuad(this,0,10,0,12);
	this.prism = new MyPrism(this, 6, 20);
	this.prism8 = new MyPrism(this, 8, 20);
	this.cylinder = new MyCylinder(this, 20, 20);
	this.lamp = new MyLamp(this,100,20);
	this.clock = new MyClock(this,105,184.5,270);
	this.drone = new MyDrone(this,7.5, 4.3 ,7.5,0,0,0);
	this.droneCable = new MyDroneCable(this);
	this.droneHook = new MyDroneHook(this,30,30);
	this.cargo = new MyCargo(this);
	this.dropSite = new MyDropSite(this);

	
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0.2,0.2,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.tableAppearance = new CGFappearance(this);
	this.tableAppearance.setAmbient(0.3,0.3,0.3,1);
	this.tableAppearance.setDiffuse(1,1,1,1);
	this.tableAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.tableAppearance.setShininess(20);
	this.tableAppearance.loadTexture("../resources/images/table.png");


	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.setAmbient(0.3,0.3,0.3,1);
	this.floorAppearance.setDiffuse(1,1,1,1);
	this.floorAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.floorAppearance.setShininess(20);
	this.floorAppearance.loadTexture("../resources/images/floor.png");


	
	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearance.setDiffuse(1,1,1,1);
	this.windowAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.windowAppearance.setShininess(20);
	this.windowAppearance.loadTexture("../resources/images/window.png");
	this.windowAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");



	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(0.3,0.3,0.3,1);
	this.slidesAppearance.setDiffuse(1,1,1,1);
	this.slidesAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.slidesAppearance.setShininess(20);
	this.slidesAppearance.loadTexture("../resources/images/slides.png");

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(0.3,0.3,0.3,1);
	this.boardAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.boardAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.boardAppearance.setShininess(120);
	this.boardAppearance.loadTexture("../resources/images/board.png");

	this.clockAppearance = new CGFappearance(this);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.clockAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.clockAppearance.setShininess(120);
	this.clockAppearance.loadTexture("../resources/images/clock.png");

	this.droneAppearance = new CGFappearance(this);
	this.droneAppearance.setAmbient(0.3,0.3,0.3,1);
	this.droneAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.droneAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.droneAppearance.setShininess(120);
	this.droneAppearance.loadTexture(this.textures[1]);


	this.setUpdatePeriod(20);

};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	

	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true);

	this.lights[3].setPosition(4, 6, 5, 1);
	this.lights[3].setVisible(true);
	
	
	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1,0,1);
	


	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1,1,0,1);
	

	this.lights[4].setPosition(0, 4, 7, 1);
	this.lights[4].setVisible(true); 
	this.lights[4].setAmbient(0.3, 0.3, 0.3, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1,1,1,1);
	


};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.update = function(currTime) {
	
	this.drone.update(currTime);
	this.droneCable.update(currTime);
	
	if(this.textI != this.currTexture){
		this.textFlag=true;
		this.textI=this.currTexture;
	}
		
	if(this.textFlag){
		this.droneAppearance.loadTexture(this.textures[this.currTexture]);
		this.textFlag=false;
	}
	
	
	var time = Math.floor(currTime/1000);


	if(this.clockMovement){
		if(this.time == -1){
			this.time = time;
		}else
		{
			if(this.time != time){
				this.time = time;
				this.clock.update();
			}
		}
		
	}
	
	this.drone.setDroneSpeed(this.droneSpeed/10);

	if(this.luz0){
		this.lights[0].enable();
	}else{
		this.lights[0].disable();
	}
	if(this.luz1){
		this.lights[1].enable();
	}else{
		this.lights[1].disable();
	}
	if(this.luz2){
		this.lights[2].enable();
	}else{
		this.lights[2].disable();
	}
	if(this.luz3){
		this.lights[3].enable();
	}else{
		this.lights[3].disable();
	}
	if(this.luz4){
		this.lights[4].enable();
	}else{
		this.lights[4].disable();
	}

	if(this.cargo.x > this.dropSite.x-0.2 && this.cargo.x < this.dropSite.x+0.2){
		if(this.cargo.y > this.dropSite.y-0.2+1 && this.cargo.y < this.dropSite.y+0.2+1){
			if(this.cargo.z > this.dropSite.z-0.2 && this.cargo.z < this.dropSite.z+0.2){
				this.dropFlag=1;
				
			}
		}
	}
	if(this.cargo.x > this.drone.x-0.2 && this.cargo.x < this.drone.x+0.2){
		if(this.cargo.y > this.drone.y-0.2-this.droneCable.length-0.9 && this.cargo.y < this.drone.y+0.2-this.droneCable.length-0.9){
			if(this.cargo.z > this.drone.z-0.2 && this.cargo.z < this.drone.z+0.2){
				this.cargoFlag=1;
				
			}
		}
	}
	


	if(this.cargoFlag==1 && this.dropFlag==0){
		this.cargo.x=this.drone.x;
		this.cargo.y=this.drone.y-this.droneCable.length-0.9;
		this.cargo.z=this.drone.z;
		
		this.cargo.b=this.drone.b;

	}
	if(this.dropFlag==1){
		this.cargo.x=this.dropSite.x;
		this.cargo.y=this.dropSite.y+0.5;
		this.cargo.z=this.dropSite.z;
	}


	this.drone.setHeliceRotationFactor(this.heliceRotationFactor);
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section


	//Cargo
	this.pushMatrix();
		this.translate(this.cargo.x, this.cargo.y,this.cargo.z);
		this.rotate(this.cargo.b, 0,1,0);
		this.rotate(this.cargo.a, 1,0,0);
		this.rotate(this.cargo.c, 0,0,1);
		this.cargo.display();
	this.popMatrix();

	//Drop Site

	this.pushMatrix();
		this.translate(this.dropSite.x,this.dropSite.y,this.dropSite.z);
		this.rotate(this.dropSite.b, 0,1,0);
		this.rotate(this.dropSite.a, 1,0,0);
		this.rotate(this.dropSite.c, 0,0,1);
		this.dropSite.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();
	
	//Drone
	this.pushMatrix();
		this.translate(this.drone.x, this.drone.y,this.drone.z);
		this.rotate(this.drone.b, 0,1,0);
		this.rotate(this.drone.a, 1,0,0);
		this.rotate(this.drone.c, 0,0,1);
		this.droneAppearance.apply();
		this.drone.display();
	this.popMatrix();

	//Drone Cable
	this.pushMatrix();
		this.translate(this.drone.x, this.drone.y,this.drone.z);
		this.scale(0.05,this.droneCable.length,0.05);
		this.rotate(90*degToRad,1,0,0);
		this.droneAppearance.apply();
		this.droneCable.display();
	this.popMatrix();

	//Drone Hook
	this.pushMatrix();
		this.translate(this.drone.x, this.drone.y-this.droneCable.length,this.drone.z);
		this.scale(0.05,0.05,0.05);
		this.rotate(this.drone.b, 0,1,0);
		this.rotate(this.drone.a, 1,0,0);
		this.rotate(this.drone.c, 0,0,1);
		this.rotate(180*degToRad,1,0,0);
		this.rotate(180*degToRad,0,1,0);
		this.droneAppearance.apply();
		this.droneHook.display();
	this.popMatrix();


	
	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.rotate(90 * degToRad, 0, 0, -1);
		this.scale(8, 15, 0.2);
		this.windowAppearance.apply();
		this.wallLeft.display();
	this.popMatrix();


	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.tableAppearance.apply();
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.tableAppearance.apply();
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//cylinder
	
	this.pushMatrix();
		this.translate(8.5,0,13);
		this.scale(1, 5, 1);
		this.rotate(90 * degToRad, -1, 0, 0);
		this.cylinder.display();
	this.popMatrix();

	//lamp
	this.pushMatrix();
		this.translate(8.5,7,7);
		this.rotate(90 * degToRad, -1, 0, 0);
		this.lamp.display();
	this.popMatrix();



	//Clock
	this.pushMatrix();
		this.scale(1,1,0.2);
		this.translate(7.5,7,1);
		this.rotate(180 * degToRad, 0 , 0, -1);
		this.clockAppearance.apply();
		this.clock.display();
	this.popMatrix();


	
	


	// ---- END Primitive drawing section
};