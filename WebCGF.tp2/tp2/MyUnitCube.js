/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {

	this.vertices = [
	       //vertices da face inferior
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
    
           //vertices da face superior
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            -0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
			];

	this.indices = [
	        //face inferior
            2, 1, 0,
			3, 2, 0,
			//face direita
			1, 2, 6,
			6, 5, 1,
            //face frontal
            0, 1, 5,
            5, 4, 0,
            //face esquerda
            7, 3, 0,
            0, 4, 7,
            //face traseira
            2, 3, 6,
            7, 6, 3,
            //face superior
            4, 5, 6,
            4, 6, 7,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
