
/*inicializamos las variables */
let camara;
let escena;
let renderizado;
let geometria;
let material;
let malla;


/*funcion */

function inicializa(){

/*palabra reservada  THRE
THREE es el name space o espacio de nombre */
//parametros de camara (fov(field of view -> ancho o amplitud ), relacion ancho  alto, distancia minima, distancia maxima )

 camara = new THREE.PerspectiveCamera(50,window.innerWidth/innerHeight,1,1500);
//posicion de la camara (x,y,z)
camara.position.set(0,0,300);
//montar la escena 
 escena = new THREE.Scene();
//se añade la camara a la escena 
escena.add(camara);

//icosahedro parametros (radio,detalle)

//geometria que vamos a poner en la camara
geometria = new THREE.IcosahedronGeometry(100,3);
//material


//MeshNormalMaterial()

//vamos a ver dos tipos de material

// material = THREE.MeshBasicMaterial({
material = new THREE.MeshNormalMaterial({
    color:'blue',
    wireframe:true,
    wireframeLinewidth:5

})

//creamos la malla con sus parametros (geometria, material)
malla = new THREE.Mesh(geometria,material);
//agregamos la malla a la escena
escena.add(malla);
//creanos el renderizado
//esto se dedica a borrar y pintar el canvas o el lienzo 3d

renderizado = new THREE.WebGLRenderer();
//definir el color del renderizado (color, alfa)
renderizado.setClearColor('black',1);
//tamaño del renderizado 
renderizado.setSize(window.innerWidth,window.innerHeight);
//añadimos al body  el render

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


