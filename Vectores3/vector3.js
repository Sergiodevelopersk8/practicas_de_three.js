// Vector3
// Clase que representa un vector 3D. Un vector 3D es un triplete ordenado de números (etiquetados como x, y y z), que se puede usar para representar una serie de cosas, como:

// Un punto en el espacio 3D.
// Una dirección y longitud en el espacio 3D. En three.js la longitud siempre será la distancia euclidiana (distancia en línea recta) de (0, 0, 0) a (x, y, z) y la dirección también se mide desde (0, 0, 0) hacia (x, y, z).
// Cualquier triplete de números ordenado arbitrariamente.
// Hay otras cosas para representar un vector 3D, como vectores de momento, etc., sin embargo, estos son los usos más comunes en three.js.

// La iteración a través de una instancia de Vector3 producirá sus componentes (x, y, z) en el orden correspondiente.

// Ejemplo de código
const a = new THREE. Vector3( 0, 1, 0 );

//sin argumentos; se inicializará en (0, 0, 0)
const b = new THREE. Vector3( );

const d = a.distanceTo( b );

// Constructor
// Vector3( x : Float, y : Float, z : Float )
// x - el valor x de este vector. El valor predeterminado es 0.
// y - el valor y de este vector. El valor predeterminado es 0.
// z - el valor z de este vector. El valor predeterminado es 0.

// Crea un nuevo Vector3.

// Propiedades
// .isVector3 : Booleano
// Indicador de solo lectura para comprobar si un objeto determinado es de tipo Vector3.

// .x : float
// .y : float
// .z : float
// métodos
// .add ( v : vector3 ) : this
// añade v a este vector.

// .addScalar ( s : Float ) : this
// Agrega el valor escalar s a los valores x, y y z de este vector.

// .addScaledVector ( v : Vector3, s : Float ) : this
// Suma el múltiplo de v y s a este vector.

// .addVectors ( a : Vector3, b : Vector3 ) : this
// Establece este vector en a + b.

// .applyAxisAngle ( axis : Vector3, angle : Float ) : this
// axis - A Vector3 normalizado.
// ángulo - Un ángulo en radianes.

// Aplica una rotación especificada por un eje y un ángulo a este vector.

// .applyEuler ( euler : Euler ) : this
// Aplica la transformada de Euler a este vector convirtiendo el objeto de Euler en un cuaternión y aplicando.

// .applyMatrix3 ( m : Matrix3 ) : this
// Multiplica este vector por m

// .applyMatrix4 ( m : Matrix4 ) : this
// Multiplica este vector (con un 1 implícito en la 4ª dimensión) por m, y divide por perspectiva.

// .applyNormalMatrix ( m : Matrix3 ) : this
// Multiplica este vector por la matriz normal m y normaliza el resultado.

// .applyQuaternion ( quaternion : Quaternion ) : this
// Aplica una transformada de Quaternion a este vector.

// .angleTo ( v : Vector3 ) : Float
// Devuelve el ángulo entre este vector y el vector v en radianes.

// .ceil () : this
// Las componentes x, y y z de este vector se redondean al valor entero más cercano.

// .clamp ( min : Vector3, max : Vector3 ) : this
// min - los valores mínimos x, y y z.
// max - los valores máximos x, y y z en el rango deseado

// Si el valor x, y o z de este vector es mayor que el valor x, y o z del vector max, se reemplaza por el valor correspondiente.

// Si el valor x, y o z de este vector es menor que el valor mínimo del vector x, y o z, se sustituye por el valor correspondiente.

// .clampLength ( min : Float, max : Float ) : this
// min - el valor mínimo al que se sujetará la longitud
// max - el valor máximo al que se sujetará la longitud

// Si la longitud de este vector es mayor que el valor máximo, el vector se reducirá para que su longitud sea el valor máximo.

// Si la longitud de este vector es menor que el valor mínimo, el vector se ampliará para que su longitud sea el valor mínimo.

// .clampScalar ( min : Float, max : Float ) : this
// min - el valor mínimo al que se sujetarán los componentes
// max - el valor máximo al que se sujetarán los componentes

// Si los valores x, y o z de este vector son mayores que el valor máximo, se reemplazan por el valor máximo.

// Si los valores x, y o z de este vector son menores que el valor mínimo, se reemplazan por el valor mínimo.

// .clone () : Vector3
// Devuelve un nuevo vector3 con los mismos valores x, y y z que este.

// .copy ( v : Vector3 ) : this
// Copia los valores de las propiedades x, y y z del vector3 pasado a este vector3.

// .cross ( v : Vector3 ) : this
// Establece este vector para cruzar el producto de sí mismo y v.

// .crossVectors ( a : Vector3, b : Vector3 ) : this
// Establece este vector para cruzar el producto de a y b.

// .distanceTo ( v : Vector3 ) : Float
// Calcula la distancia de este vector a v.

// .manhattanDistanceTo ( v : Vector3 ) : Float
// Calcula la distancia de Manhattan desde este vector a v.

// .distanceToSquared ( v :  Vector3 ) : Float
// Calcula la distancia al cuadrado de este vector a v. Si solo está comparando la distancia con otra distancia, debe comparar la distancia al cuadrado, ya que es un poco más eficiente de calcular.

// .divide ( v : Vector3 ) : this
// Divide este vector por v.

// .divideScalar ( s : Float ) : this
// Divide este vector por escalar s.

// .dot ( v : Vector3 ) : Float
// Calcula el producto escalar de este vector y v.

// .equals ( v : Vector3 ) : Boolean
// Devuelve true si los componentes de este vector y v son stric

let camera 
let scene 
let renderer
let geometry 
let material 
let mesh
let clock
 
function init() {

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


scene = new THREE.Scene();


//con tres puntos 
material=new THREE.MeshBasicMaterial({color:'red'})
geometry = new THREE.BufferGeometry();
 const points=[
 new THREE.Vector3( -1,  1, 0 ),
 new THREE.Vector3( -1, -1, 0 ),
 new THREE.Vector3(  1, -1, 0 )
 ]

geometry.setFromPoints(points)
geometry.computeVertexNormals()
mesh = new THREE.Mesh( geometry, material );

 scene.add(mesh)







camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100 );
camera.position.set(0,0,-3);
camera.lookAt(mesh.position);

clock = new THREE.Clock();
window.addEventListener( 'resize', onWindowResize, false );
}



let dir=1;

function animate() {
requestAnimationFrame( animate );
let delta =  clock.getDelta();
 mesh.rotation.x += delta * 0.5;
 mesh.rotation.y += delta * 2;
 mesh.position.x += dir*delta;
 
if (mesh.position.x > 2) {
dir=-1;
} else if (mesh.position.x < - 2)  {
dir=1;
}
renderer.render( scene, camera );
}
 
 
function onWindowResize() {
windowHalfX = window.innerWidth / 2;
windowHalfY = window.innerHeight / 2;
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );
}
 
init();
animate();