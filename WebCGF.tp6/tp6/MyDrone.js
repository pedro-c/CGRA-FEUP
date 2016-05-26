


 function MyDrone(scene, x,y,z,a,b,c) {
 	CGFobject.call(this,scene);

    this.scene = scene;
     	
 	this.arm1 = new MyCylinder(scene);
 	this.arm2 = new MyCylinder(scene);
 	this.base1 = new MyCylinder(scene);
 	this.base2 = new MyCylinder(scene);
 	this.base3 = new MyCylinder(scene);
 	this.base4 = new MyCylinder(scene);
 	this.lamp = new MyLamp(scene,20,20);
 	this.leg1 = new MyDroneHelice(scene);
 	this.helice1= new MyDroneHelice(scene,0);
 	this.helice2= new MyDroneHelice(scene,0);
 	this.helice3= new MyDroneHelice(scene,0);
 	this.helice4= new MyDroneHelice(scene,0);
 	this.leg1 = new MyDroneLeg(scene,20,20);
 	this.leg2 = new MyDroneLeg(scene,20,20);
 	this.leg3 = new MyDroneLeg(scene,20,20);
 	this.leg4 = new MyDroneLeg(scene,20,20);
	this.legCylinder1 = new MyCylinder(scene);
	this.legCylinder2 = new MyCylinder(scene);
	this.cable = new MyDroneCable(scene);

 	this.cube = new MyUnitCubeQuad(scene);

	this.x = x;
	this.y = y;
	this.z = z;
	this.a = a;
	this.b = b;
	this.c = c;
 	this.time = 0;
 	this.speed = 0;
 	this.movingspeed = 0;
 	this.movingFlag = 0;
 	this.rotation = 0;
	this.max_speed = .2;
	this.max_movingSpeed = 0.2;
	this.rotAcceleration = 0.010;
	this.movAcceleration = 0.010;
	this.levelFlag = 0;
	this.levelSpeed = 0;
	this.levelAceleration = 0.010;
	this.max_levelSpeed = 0.2;
	this.maxInclination = 0.5;
	this.inclinationSpeed = 0;
	this.inclinationAccelaration = 0.020;
	this.droneSpeed = 0;
	this.rotationSpeedL = 0.2;
	this.rotationSpeedN = 1;
	this.rotationSpeedR = 10;




	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);



 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.display=function(){

 	var degToRad = Math.PI / 180.0;

	this.scene.pushMatrix();
		this.scene.translate(0,0,0);
		this.scene.scale(0.63,0.63,0.63);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.lamp.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-1.5);
		this.scene.scale(0.15,0.15,3);
		this.arm1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1.5,0,0);
		this.scene.rotate(-90*degToRad,0,1,0);
		this.scene.scale(0.15,0.15,3);
		this.arm2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1.5,-0.25,0);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.25,0);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.25,1.5);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base3.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.25,-1.5);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.scene.scale(0.15,0.15,0.5);
		this.base3.display();
	this.scene.popMatrix();

   	//Drone Hélice 1 - esquerda

	this.scene.pushMatrix();
		this.scene.translate(1.5,0.24,0);
		this.scene.rotate(this.helice1.b, 0,1,0);
		this.helice1.display();
	this.scene.popMatrix();

	//Drone Hélice 2 - direita

	this.scene.pushMatrix();
		this.scene.translate(-1.5,0.24,0);
		this.scene.rotate(this.helice2.b, 0,1,0);
		this.helice2.display();
	this.scene.popMatrix();

	//Drone Hélice 3 - frente

	this.scene.pushMatrix();
		this.scene.translate(0,0.24,1.5);
		this.scene.rotate(this.helice3.b, 0,1,0);
		this.helice3.display();
	this.scene.popMatrix();

	//Drone Hélice 4 - traseira

	this.scene.pushMatrix();
		this.scene.translate(0,0.24,-1.5);
		this.scene.rotate(this.helice4.b, 0,1,0);
		this.helice4.display();
	this.scene.popMatrix();
	
	//Leg1
	this.scene.pushMatrix();
		this.scene.translate(1,-1,-0.25);
		this.scene.scale(0.075,0.075,0.075);
		this.scene.rotate(-90*degToRad,0,1,0);
		this.leg1.display();
	this.scene.popMatrix();
	
	//Leg2
	this.scene.pushMatrix();
		this.scene.translate(1,-1,0.25);
		this.scene.scale(0.075,0.075,0.075);
		this.scene.rotate(-90*degToRad,0,1,0);
		this.leg2.display();
	this.scene.popMatrix();
	//Leg3
	this.scene.pushMatrix();
		this.scene.translate(-1,-1,-0.25);
		this.scene.scale(0.075,0.075,0.075);
		this.scene.rotate(90*degToRad,0,1,0);
		this.leg3.display();
	this.scene.popMatrix();
	//Leg4
	this.scene.pushMatrix();
		this.scene.translate(-1,-1,0.25);
		this.scene.scale(0.075,0.075,0.075);
		this.scene.rotate(90*degToRad,0,1,0);
		this.leg4.display();
	this.scene.popMatrix();



	this.scene.pushMatrix();
		this.scene.translate(-1,-1,-0.5);
		this.scene.scale(0.1,0.1,1);
		this.legCylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1,-1,-0.5);
		this.scene.scale(0.1,0.1,1);
		this.legCylinder1.display();
	this.scene.popMatrix();
	


	//Leg's Base
	this.scene.pushMatrix();
		this.scene.translate(0,-0.2,0);
		this.scene.scale(0.6,0.2,0.8);
		this.cube.display();
	this.scene.popMatrix();


	this.primitiveType = this.scene.gl.TRIANGLES;


 }



MyDrone.prototype.update = function(currTime) {
	
	if(this.rotation==1){
		if(this.speed<=this.max_speed*this.droneSpeed){
			this.speed+=this.rotAcceleration*this.droneSpeed;
		}else{
			this.speed=this.max_speed*this.droneSpeed;		
		}
	}else if(this.rotation==3){
		if(this.speed>=-this.max_speed*this.droneSpeed){
			this.speed-=this.rotAcceleration*this.droneSpeed;
		}else{
			this.speed=-this.max_speed*this.droneSpeed;
		}
	}else if(this.rotation==2){
		if(this.speed>0){
			this.speed-=this.rotAcceleration*this.droneSpeed;
		}else{
			this.speed=0;
		}
	}else if(this.rotation==4){
		if(this.speed<0){
			this.speed+=this.rotAcceleration*this.droneSpeed;
		}else{
			this.speed=0;
		}
	}


	if(this.movingFlag==1){
		if(this.movingspeed<=this.max_movingSpeed*this.droneSpeed){
			this.movingspeed+=this.movAcceleration*this.droneSpeed;		
		}else{
			this.movingspeed=this.max_movingSpeed*this.droneSpeed;		
		}
	}else if(this.movingFlag==2){
		if(this.movingspeed>=-this.max_movingSpeed*this.droneSpeed){
			this.movingspeed-=this.movAcceleration*this.droneSpeed;
		}else{
			this.movingspeed=-this.max_movingSpeed*this.droneSpeed;
		}
	}else if(this.movingFlag==3){
		if(this.movingspeed>0){
			this.movingspeed-=this.movAcceleration*this.droneSpeed;
		}else{
			this.movingspeed=0;
		}
	}else if(this.movingFlag==4){
		if(this.movingspeed<0){
			this.movingspeed+=this.movAcceleration*this.droneSpeed;
		}else{
			this.movingspeed=0;
		}
	}

	if(this.levelFlag==1){
		if(this.levelSpeed<=this.max_levelSpeed*this.droneSpeed){
			this.levelSpeed+=this.levelAceleration*this.droneSpeed;
		}else{
			this.levelSpeed=this.max_levelSpeed*this.droneSpeed;		
		}
	}else if(this.levelFlag==3){
		if(this.levelSpeed>=-this.max_levelSpeed*this.droneSpeed){
			this.levelSpeed-=this.levelAceleration*this.droneSpeed;
		}else{
			this.levelSpeed=-this.max_levelSpeed*this.droneSpeed;
		}
	}else if(this.levelFlag==2){
		if(this.levelSpeed>0){
			this.levelSpeed-=this.levelAceleration*this.droneSpeed;
		}else{
			this.levelSpeed=0;
		}
	}else if(this.levelFlag==4){
		if(this.levelSpeed<0){
			this.levelSpeed+=this.levelAceleration*this.droneSpeed;
		}else{
			this.levelSpeed=0;
		}
	}

	if(this.movingFlag==1){
		if(this.inclinationSpeed<=this.maxInclination*this.droneSpeed){
			this.inclinationSpeed+=this.inclinationAccelaration*this.droneSpeed;		
		}else{
			this.inclinationSpeed=this.maxInclination*this.droneSpeed;		
		}
	}else if(this.movingFlag==2){
		if(this.inclinationSpeed>=-this.maxInclination*this.droneSpeed){
			this.inclinationSpeed-=this.inclinationAccelaration;	
		}else{
			this.inclinationSpeed=-this.maxInclination*this.droneSpeed;
		}
	}else if(this.movingFlag==3){
		if(this.inclinationSpeed>0){
			this.inclinationSpeed-=this.inclinationAccelaration*this.droneSpeed;
		}else{
			this.inclinationSpeed=0;
		}
	}else if(this.movingFlag==4){
		if(this.inclinationSpeed<0){
			this.inclinationSpeed+=this.inclinationAccelaration*this.droneSpeed;
		}else{
			this.inclinationSpeed=0;
		}
	}


	var zvalue = Math.cos(this.b);
	var xvalue = Math.sin(this.b);

	

	this.z+=zvalue*this.movingspeed;
	this.x+=xvalue*this.movingspeed;
	
	this.y+=this.levelSpeed;
	this.a=this.inclinationSpeed;

	this.b+=this.speed;

	this.time = currTime;

	this.helice1.updateHelice();
	this.helice2.updateHelice();
	this.helice3.updateHelice();
	this.helice4.updateHelice();

}


MyDrone.prototype.startRotateLeft = function(currTime){

	this.rotation=1;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedR);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedR);
	this.helice3.updateHeliceSpeed(this.rotationSpeedL);
	this.helice4.updateHeliceSpeed(this.rotationSpeedL);
}

MyDrone.prototype.stopRotateLeft = function(){
	this.rotation=2;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
		
}

MyDrone.prototype.startRotateRight = function(currTime){
	this.rotation=3;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedL);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedL);
	this.helice3.updateHeliceSpeed(this.rotationSpeedR);
	this.helice4.updateHeliceSpeed(this.rotationSpeedR);
}

MyDrone.prototype.stopRotateRight = function(){
	this.rotation=4;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
		
}


MyDrone.prototype.startMovingFoward = function(currTime){
	this.movingFlag=1;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedL);
	this.helice4.updateHeliceSpeed(this.rotationSpeedR);

}

MyDrone.prototype.startMovingBackwards = function(currTime){
	this.movingFlag=2;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedR);
	this.helice4.updateHeliceSpeed(this.rotationSpeedL);
}

MyDrone.prototype.stopMovingFoward = function(currTime){
	this.movingFlag=3;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
}

MyDrone.prototype.stopMovingBackwards = function(currTime){
	this.movingFlag=4;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
	
}


MyDrone.prototype.startMovingUp = function(currTime){
	this.levelFlag=1;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedR);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedR);
	this.helice3.updateHeliceSpeed(this.rotationSpeedR);
	this.helice4.updateHeliceSpeed(this.rotationSpeedR);
	
}

MyDrone.prototype.stopMovingUp = function(currTime){
	this.levelFlag=2;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
	
}

MyDrone.prototype.startMovingDown = function(currTime){
	this.levelFlag=3;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedL);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedL);
	this.helice3.updateHeliceSpeed(this.rotationSpeedL);
	this.helice4.updateHeliceSpeed(this.rotationSpeedL);
	
}

MyDrone.prototype.stopMovingDown = function(currTime){
	this.levelFlag=4;
	this.helice1.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice2.updateHeliceSpeed(-this.rotationSpeedN);
	this.helice3.updateHeliceSpeed(this.rotationSpeedN);
	this.helice4.updateHeliceSpeed(this.rotationSpeedN);
	
}
MyDrone.prototype.setDroneSpeed = function(speed){

	this.droneSpeed=1+speed*2;

}

MyDrone.prototype.setHeliceRotationFactor = function(factor){

	this.helice1.setFactor(factor);
	this.helice2.setFactor(factor);
	this.helice3.setFactor(factor);
	this.helice4.setFactor(factor);

}
