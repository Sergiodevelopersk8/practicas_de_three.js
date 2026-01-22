import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Experience{

    constructor(canvas){

        // la escena contenedor
        this.scene = new THREE.Scene();

        this.scene.background = new THREE.Color('#11151c');
        
        //la camara parametros oficiales
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        // renderizar 
        this.renderer = new THREE.WebGLRenderer({
            canvas:canvas
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Inicializar controles
        /* para Rotar: Click izquierdo y arrastrar.
        Zoom: Rueda del mouse.
        Pan (Moverse): Click derecho y arrastrar. */
        this.controls = new OrbitControls(this.camera, canvas)
        this.controls.enableDamping = true;

        
        
        // llamar las funciones 
        this.createObject();
        this.animate();
        this.createLights();

        window.addEventListener('resize', () => {
        this.onResize();
        });





    } //fin del constructor

    colorsRandoms(){
        let color = ['blue','purple','orange','red','green'];
        let randomColor = Math.floor(Math.random() * color.length)
        let color_select = color[randomColor];
        return color_select
    }

    onResize() {
    // 1. Actualizar el tamaño del renderizador
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. Actualizar la relación de aspecto de la cámara
    this.camera.aspect = window.innerWidth / window.innerHeight;

    // 3. ¡Muy importante! Notificar a la cámara del cambio
    this.camera.updateProjectionMatrix();

    // 4. Ajustar la resolución para pantallas de alta densidad (Retina/4K)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }   

    createCube(){

        // geometria y material
        // es un cubo
        const geometry = new THREE.BoxGeometry(1,1,1);
        
        //  material estandar sin luces
        const material = new THREE.MeshBasicMaterial({color:this.colorsRandoms()});
        
        // const material = new THREE.MeshStandardMaterial({color:this.colorsRandoms()}); 
        this.cube = new THREE.Mesh(geometry,material);
        
        this.scene.add(this.cube);
     } //fin de la funcion de createCube

     createDonus(){
                // geometria y material
        // es una dona

        const geometry = new THREE.TorusGeometry(1,0.4,16,100);
        //const material = new THREE.MeshBasicMaterial({color:this.colorsRandoms()});
                                    
        const material = new THREE.MeshStandardMaterial({
            color:this.colorsRandoms(),
            metalness: 0.7,
            roughness: 0.2,
        });
        this.donut = new THREE.Mesh(geometry,material);
        this.donut.position.x = 4
        this.scene.add(this.donut);
     } // fin de la dona


    createObject(){

    this.createCube();
    this.createDonus();
    this.TextureMapping();    
    this.TheRaycast();

     } //fin de la funcion de Objects


     createLights(){

        // Luz ambiental
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);


        // Luz de punto
        const pointLight = new THREE.PointLight(0xffffff, 50); 

        pointLight.position.set(2,3,4);

        this.scene.add(pointLight);


     }

     TextureMapping(){

        //es elk grid que hace que se vea como si fuera de un motor como blender
        const grid = new THREE.GridHelper(20, 20, 0xffffff, 0x444444);
        this.scene.add(grid);
     }

     onClick(event){
        // Convertir la posición del mouse a coordenadas normalizadas (-1 a +1)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Actualizar el rayo desde la cámara y el mouse
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Calcular objetos que intersectan el rayo
    // Pasamos un array con los objetos que queremos que sean "clicleables"
    const intersects = this.raycaster.intersectObjects([this.cube, this.donut]);

    if (intersects.length > 0) {
        // ¡Atrapamos algo! intersects[0] es el objeto más cercano
        const objectAtrapado = intersects[0].object;
        
        // Reto de la documentación: Cambiarle el color al hacer clic
        objectAtrapado.material.color.set(this.colorsRandoms());
        
        // Hagamos que pegue un pequeño "brinco" de escala
        objectAtrapado.scale.set(1.5, 1.5, 1.5);
        setTimeout(() => objectAtrapado.scale.set(1, 1, 1), 200);
    }
     }

     TheRaycast(){
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        window.addEventListener('click',(event)=>{
            this.onClick(event);
        })
     }

      animate(){
        // requerimientos del frame
        window.requestAnimationFrame (()=> this.animate());

        this.controls.update();


        // animacion basica
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        
        this.donut.rotation.z += 0.02;
        this.donut.rotation.y += 0.01;

        // dibujar la escena
        this.renderer.render(this.scene, this.camera);


      } // fin de la funcion de animate 





} // fin de la clase 

const canvas = document.querySelector('#bg');

if(canvas){
    new Experience(canvas);
} 
    
