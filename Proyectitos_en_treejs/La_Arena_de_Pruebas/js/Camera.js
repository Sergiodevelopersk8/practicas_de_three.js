//  (Tus ojos) ruta -> js/Camera

import * as THREE from 'three';


export default class Camera{

    constructor(){
        this.instance = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        
        this.instance.position.set(0,2,8); // Un poco arriba y atrás

    }


    resize(){
        this.instance.aspect = window.innerWidth / window.innerHeight;
        this.instance.updateProjectionMatrix();
    }


}

