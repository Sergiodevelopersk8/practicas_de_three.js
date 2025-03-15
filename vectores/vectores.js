
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

//vector 2
//vector2 es un punto en el espacio
//que esta determinado por dos coordenadas
//(x,  y)

let cuadrado = new THREE.Shape([
    new THREE.Vector2(100,100),
    new THREE.Vector2(400,100),
    new THREE.Vector2(400,400),
    new THREE.Vector2(100,400),


]);


//extruimos la geometria 
geometria = new THREE.ExtrudeGeometry(
    cuadrado,
    {
        bevelEnabled:true,//biselado
        amount:90 //cantidad de extruccion de pixeles
    }
);





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


