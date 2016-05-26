/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
	this.scene = new LightingScene();
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 
	

	// add a group of controls (and open/expand by defult)

	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'luz0');
	group.add(this.scene, 'luz1');
	group.add(this.scene, 'luz2');
	group.add(this.scene, 'luz3');
	group.add(this.scene, 'luz4');
	group.add(this.scene, 'luz5');
	
	
	// add a slidere
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'clockMovement');
	this.gui.add(this.scene, 'droneSpeed', 0, 5);
	this.gui.add(this.scene, 'heliceRotationFactor', 0, 2);
	this.gui.add(this.scene, 'currTexture', { camo1: 0, camo2: 1, yellow: 2, homer: 3, boss: 4, AS: 5} );
	
	return true;
};
/**
 * processKeyboard
 * @param event {Event}
 */


MyInterface.prototype.processKeyboard = function(event) {
 	// call CGFinterface default code (omit if you want to override)
 	CGFinterface.prototype.processKeyboard.call(this,event);
 	
 	// Check key codes e.g. here: http://www.asciitable.com/
 	// or use String.fromCharCode(event.keyCode) to compare chars
 	
 	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
 	switch (event.keyCode)
 	{
		case(76): //'L'
		{
			this.scene.droneCable.dropCable();
			break;
		}
		case(108): // 'l'
		{
			this.scene.droneCable.dropCable();
			break;
		}
		case(80): //'P'
		{
			this.scene.droneCable.liftCable();
			break;
		}
		case(112): // 'p'
		{
			this.scene.droneCable.liftCable();
			break;
		}

		

	};
};

MyInterface.prototype.processKeyDown = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65): // 'A'
		{
		    this.scene.drone.startRotateLeft();
		    
		    break;
		}

        case(97): // 'a'
		{
			this.scene.drone.startRotateLeft();
			
		    break;
		}

		case(68): // 'D'
		{
			this.scene.drone.startRotateRight();
		    break;
		}

		case(100): // 'd'
		{
			this.scene.drone.startRotateRight();
		    break;
		}

		case(87): // 'W'
		{
			this.scene.drone.startMovingFoward();
		    break;
		}

		case(119): // 'w'
		{
			this.scene.drone.startMovingFoward();
		    break;
		}

		case(83): // 'S'
		{
			this.scene.drone.startMovingBackwards();
		    break;
		}

		case(115): // 's'
		{
			this.scene.drone.startMovingBackwards();
		    break;
		}
		case(69): // 'E'
		{
			this.scene.drone.startMovingUp();
		    break;
		}

		case(101): // 'e'
		{
			this.scene.drone.startMovingUp();
		    break;
		}
		case(81): // 'Q'
		{
			this.scene.drone.startMovingDown();
		    break;
		}
		case(113): // 'q'
		{
			this.scene.drone.startMovingDown();
		    break;
		}
		case(113): // 'q'
		{
			this.scene.drone.startMovingDown();
		    break;
		}


	};
};

MyInterface.prototype.processKeyUp = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65): // 'A'
		{
		    this.scene.drone.stopRotateLeft();
		    break;
		}

        case(97): // 'a'
		{
			this.scene.drone.stopRotateLeft();
		    break;
		}

		case(68): // 'D'
		{
			this.scene.drone.stopRotateRight();
		    break;
		}

		case(100): // 'd'
		{
			this.scene.drone.stopRotateRight();
		    break;
		}

		case(87): // 'W'
		{
			this.scene.drone.stopMovingFoward();
		    break;
		}

		case(119): // 'w'
		{
			this.scene.drone.stopMovingFoward();
		    break;
		}

		case(83): // 'S'
		{
			this.scene.drone.stopMovingBackwards();
		    break;
		}

		case(115): // 's'
		{
			this.scene.drone.stopMovingBackwards();
		    break;
		}

		case(69): // 'E'
		{
			this.scene.drone.stopMovingUp();
		    break;
		}

		case(101): // 'e'
		{
			this.scene.drone.stopMovingUp();
		    break;
		}
		case(81): // 'Q'
		{
			this.scene.drone.stopMovingDown();
		    break;
		}
		case(113): // 'q'
		{
			this.scene.drone.stopMovingDown();
		    break;
		}

	};
};
