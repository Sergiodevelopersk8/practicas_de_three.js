// ruta ->  js / Box.js

import * as THREE from 'three';

export default class Box{

    constructor(){
    
    this.geometry = new THREE.BoxGeometry(1,1,1);

    this.material = new THREE.MeshStandardMaterial({color: 0x00ff00});

    this.mesh = new THREE.Mesh(this.geometry, this.material);    

    }


} // fin de la clase


