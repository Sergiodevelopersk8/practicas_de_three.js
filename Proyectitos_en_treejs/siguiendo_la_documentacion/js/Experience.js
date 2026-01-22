import * as THREE from 'three';

export default class Experience{

    constructor(canvas){

        // la escena contenedor
        this.scene = new THREE.Scene();
        
        //la camara parametros oficiales
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        this.camera.position.z = 5;

        // renderizar 
        this.renderer = new THREE.WebGLRenderer({
            canvas:canvas
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.createObject();
        this.animate();
    } //fin del constructor

    createObject(){

        // geometria y material
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color:0x00ff00});
        this.cube = new THREE.Mesh(geometry,material);
        
        this.scene.add(this.cube);
     } //fin de la funcion de createObject


      animate(){
        // requerimientos del frame
        window.requestAnimationFrame (()=> this.animate());

        // animacion basica
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        // dibujar la escena
        this.renderer.render(this.scene, this.camera);


      } // fin de la funcion de animate 

} // fin de la clase 

const canvas = document.querySelector('#bg');

if(canvas) new Experience(canvas);
