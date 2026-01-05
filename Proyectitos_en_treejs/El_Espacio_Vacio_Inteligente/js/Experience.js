// ruta -> js/Experience.js

import * as THREE from 'three';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import Box from './../World/Box.js'

export default class Experience{

    constructor(canvas){
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer(this.canvas);
        
        //se instancia el objeto
        this.box = new Box();
        
        // 2. Añadimos el MESH de la caja a la escena
        this.scene.add(this.box.mesh);

        this.update();

        window.addEventListener('resize', ()=>{

        this.camera.resize()
        this.renderer.resize()
        
    });
            



    }

    
    update(){
        
        // 1. Pedimos el siguiente frame
        window.requestAnimationFrame( () => this.update());

        this.renderer.update(this.scene,this.camera.instance)

        this.box.mesh.rotation.y += 0.01; 


    }
    
  
} //fin de la clase