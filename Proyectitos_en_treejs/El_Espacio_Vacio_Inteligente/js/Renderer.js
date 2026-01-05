// ruta -> js/Render.js


class Renderer{

 
    constructor(canvas){

        this.instance = new THREE.WebGLRenderer({ canvas: canvas })
    
    }

    update(scene,camera){

        this.instance.render(scene,camera)

    }

    resize(){
        this.instance.setSize(window.innerWidth, window.innerHeight);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
 
}//fin de la clase 

const canvas = document.querySelector('canvas');
const myExperience = new Experience(canvas);