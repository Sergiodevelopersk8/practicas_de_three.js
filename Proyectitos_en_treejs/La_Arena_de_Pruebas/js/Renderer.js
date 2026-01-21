//  (El dibujante) ruta -> js/Camera
import * as THREE from 'three';
import Camera from './Camera.js';

export default class Renderer {
    constructor(canvas) {
        this.instance = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true 
        });
        this.instance.setSize(window.innerWidth, window.innerHeight);
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    resize() {
        this.instance.setSize(window.innerWidth, window.innerHeight);
    }

    update(scene, camera) {
        this.instance.render(scene, camera);
    }
}


