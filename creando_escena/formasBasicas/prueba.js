
let camara;
let escena;
let renderizado;
let geometria;
let material;
let malla;


/*funcion */

function inicializa(){

 camara = new THREE.PerspectiveCamera(50,window.innerWidth/innerHeight,1,1500);

camara.position.set(0,0,300);
 escena = new THREE.Scene();

escena.add(camara);
// geometria = new THREE.CylinderGeometry(radiusTop = 50,radiusBottom = 100,height = 300,radiusSegments = 9, heightSegments = 9, openEnded = false);  


//toroide
//parametros(radio, ancho, segmentosradiales,segmentos de tubo)

// geometria = new THREE.TorusGeometry(radius = 200,tubeWidth = 60, radialSegments = 20,tubularSegments = 20);
/*
 octaedro tiene 8 cara 
 parametros (radio, detalle )
 geometria = new THREE.OctahedronGeometry(radius = 150,details = 10);
 */ 

/*
tetaedro tiene 10 caras 
parametros (radios, detalles)
geometria = new THREE.TetrahedronGeometry(radius = 250,details = 1);
geometria = new THREE.TetrahedronGeometry(radius = 250,details = 1);
*/
/*
icosaedro tiene 20 caras 
parametros (radios, detalles)
geometria = new THREE.IcosahedronGeometry(radius = 150,details = 1);
*/
/*
cubo   
parametros (ancho, alto,profundidad,anchosegmento,altosegmento,profundidadsegmento,)
geometria = new THREE.BoxGeometry(width = 200, height = 200, depth = 100, widthSegments=5, heightSegments=5, depthSegments = 5);
*/
geometria = new THREE.BoxGeometry(width = 200, height = 200, depth = 100, widthSegments=5, heightSegments=5, depthSegments = 5);
/*

cubo   
parametros(radio,anchoSegmentos,altoSegmetos)
geometria = new THREE.SphereGeometry(width = 190, widthSegments=19, heightSegments=19 );
geometria = new THREE.SphereGeometry(width = 190, widthSegments=19, heightSegments=19 );

*/

/*CONO 
   parametros(radio,alto,segmentosRadiales,segmentosAlto,tapa o no tapa)
    geometria=new THREE.ConeGeometry(
        radius=200,
        height=400,
        radialSegments=20,
        heightSegments=20,
        openEnded=true    )
*/



/*   
TORUSKNOTGEOMETRY 
parametros(radio,tubo,segmetosTubulares,segmentosRadiales)
geometria=new THREE.TorusGeometry(radius=200,tube=29,tubularSegments=5,radialSegments=5,p=2,q=3);

*/

material = new THREE.MeshNormalMaterial({
    color:'blue',
    wireframe:true,
    wireframeLinewidth:5

})

malla = new THREE.Mesh(geometria,material);
escena.add(malla);

/* 
cilindro
parametros (radioArriba, radioabajo,segmentosRadio,segmentosAlto,queremosTapa)
*/




renderizado = new THREE.WebGLRenderer();
renderizado.setClearColor('black',1);
renderizado.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizado.domElement);

}


inicializa();
function animando(){
//
    requestAnimationFrame(animando);
    malla.rotation.x+=0.012;
    malla.rotation.y+=0.012;
    renderizado.render(escena,camara);


}
animando();


