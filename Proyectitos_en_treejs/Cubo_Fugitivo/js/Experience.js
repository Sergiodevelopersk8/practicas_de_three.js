// ruta -> js/Experience.js

import * as THREE from 'three';
import Camera from './Camera.js'
import Renderer from './Renderer.js';
import Box from './Box.js'

export default class Experience {
    constructor(canvas) {
        
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.score = 0;
        this.scoreElement = document.getElementById('score');
        this.renderer = new Renderer(this.canvas);
        this.isACaptured = false;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.box = new Box();
        this.scene.add(this.box.mesh);

        // Luz para ver el material
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 2, 5);
        this.scene.add(light);

        this.update();

        window.addEventListener('click', (event) => {

            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            this.raycaster.setFromCamera(this.mouse, this.camera.instance);
            const intersect = this.raycaster.intersectObject(this.box.mesh);

            
            if (intersect.length > 0 && !this.isACaptured) {
                  this.score++;  
                this.scoreElement.innerText = this.score;
                // DECLARAMOS con const para que no marque error
                const colors = ['red', 'blue', 'green', 'purple', 'orange'];
                const indice_random = Math.floor(Math.random() * colors.length);
                const color_random = colors[indice_random];
                
                this.box.mesh.material.color.set(color_random);
                this.isACaptured = true;
                 setTimeout(() => {
            this.isACaptured = false;
            this.box.mesh.material.color.set('white');
        }, 3000);
                this.box.mesh.position.x = (Math.random() - 0.5) * 8; 
                this.box.mesh.position.y = (Math.random() - 0.5) * 5;
            }
        });
    } //fin del constructor

    update() {
        window.requestAnimationFrame(() => this.update());
        this.renderer.update(this.scene, this.camera.instance);
        
        this.box.mesh.rotation.y += 0.01;

        if (!this.isACaptured) {
            this.box.mesh.position.x = Math.sin(Date.now() * 0.002) * 2;
        }
    }

   
}

// ARRANQUE FUERA DE LA CLASE
const canvas = document.querySelector('canvas');
if (canvas) {
    new Experience(canvas);
}