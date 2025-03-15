
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

/*
plano
parametros(ancho,alto)
*/
/*
circulo 
parametros(radio,numero de lados)
geometria = new THREE.CircleGeometry(200,100);
*/

// geometria = new THREE.PlaneGeometry(300,300);
// material = new THREE.LineDashedMaterial({color:'purple'});
// material = new THREE.MeshBasicMaterial({color:'blue',wireframe:false,wireframeLinewidth:5});

/*anillo
parametros(radio interior,radio exterior,numero de lados)
geometria = new THREE.RingGeometry(150,250,30);
 */

/**
 lineas
 parametros (alto,ancho);
 la mallla debe ser en Line
 malla = new THREE.Line(geometria,material);
 */
geometria = new THREE.BoxGeometry(170,170);


material = new THREE.MeshNormalMaterial({color:'blue',wireframe:true,wireframeLinewidth:5});

malla = new THREE.Mesh(geometria,material);
escena.add(malla);


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


