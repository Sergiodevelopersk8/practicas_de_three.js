// ruta -> js/Render.js

import * as THREE from 'three';

export default class Renderer{

 
    constructor(canvas){

        this.instance = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    
    }

    update(scene,camera){

        this.instance.render(scene,camera)

    }

    resize(){
        this.instance.setSize(window.innerWidth, window.innerHeight);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    // ... al final de Experience.js ...
     canvas = document.querySelector('canvas');
    if (canvas) {
    const myExperience = new Experience(canvas);
    }
 
}//fin de la clase 

