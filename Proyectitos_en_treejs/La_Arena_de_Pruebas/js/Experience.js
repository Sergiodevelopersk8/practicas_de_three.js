//  (El cerebro que une todo) ruta -> js/Camera
import  * as THREE from 'three';
import Camera from './Camera.js';
import Renderer from './Renderer.js';

export default class Experience{
    constructor(canvas){
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        // 1. Niebla (Fog) - ¡Esto da mucha atmósfera!
        // Color negro, empieza a los 2 metros y termina a los 15
        this.scene.fog = new THREE.Fog('#000000', 2, 15);
        this.camera = new Camera();
        this.renderer = new Renderer(this.canvas);

        this.createWorld();
        this.createLights();
        this.update();
        this.createParticles();
        
        window.addEventListener('resize', () => {
            this.camera.resize();
            this.renderer.resize();
        });
    }

    createWorld(){
        // EL SUELO
        const floorGeo = new THREE.PlaneGeometry(20, 20);
        const floorMat = new THREE.MeshStandardMaterial({ color: '#222222' });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = - Math.PI * 0.5; // Acostado
        this.scene.add(floor);

        // EL OBJETIVO (Cubo)
        const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        const boxMat = new THREE.MeshStandardMaterial({ color: '#ff0000' });
        this.target = new THREE.Mesh(boxGeo, boxMat);
        this.target.position.y = 0.5; // Apoyado sobre el suelo
        this.scene.add(this.target);
    }

createLights() {
        const sunLight = new THREE.DirectionalLight('#ffffff', 2);
        sunLight.position.set(1, 2, 3);
        this.scene.add(sunLight);

        const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
        this.scene.add(ambientLight);
    }

    update() {
        window.requestAnimationFrame(() => this.update());
        
        // Animación simple
        this.target.rotation.y += 0.01;
        // Animamos las partículas
    if(this.particles) {
        this.particles.rotation.y += 0.001;
        this.particles.rotation.x += 0.001;
    }
        this.renderer.update(this.scene, this.camera.instance);
    }

    createParticles(){
        // 1. Geometría: Creamos un contenedor para 500 puntos
    const particlesGeo = new THREE.BufferGeometry();
    const count = 500;
    const positions = new Float32Array(count * 3); // x, y, z por cada punto

    for (let i = 0; i < count * 3; i++) {
        // Posiciones aleatorias en un cubo de 10x10x10
        positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // 2. Material: Puntos blancos pequeños
    const particlesMat = new THREE.PointsMaterial({
        color: '#ffffff',
        size: 0.02,
        sizeAttenuation: true // Hace que se vean más pequeños a lo lejos
    });

    // 3. El objeto final se llama Points, no Mesh
    this.particles = new THREE.Points(particlesGeo, particlesMat);
    this.scene.add(this.particles)
    }

}

// Inicialización
const canvas = document.querySelector('#bg'); // Cambiamos a #bg para ser precisos
if(canvas) {
    new Experience(canvas);
}