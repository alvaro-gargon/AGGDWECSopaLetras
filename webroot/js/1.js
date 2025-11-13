if(navigator.cookieEnabled==false){
    alert("Cookies desactivadas, no se guardarán las puntuaciones");
}
if(navigator.onLine==false){
    let mensaje=document.getElementById("offline");
    mensaje.style.display="block";
}

function Reloj(){
   let actual=new Date();
   let horas=actual.getHours();
   let minutos=actual.getMinutes();
   let segundos=actual.getSeconds();
   let hora="";
   //Convertimos los números de un dígito a dos dígitos
   horas = (horas<=9)?("0"+horas):horas;
   minutos = (minutos<=9)?("0"+minutos):minutos;
   segundos=(segundos<=9)? ("0"+segundos):segundos;        

   hora = horas+":"+minutos+":" +segundos
   var reloj = document.getElementById("reloj");
   reloj.innerHTML=hora;
   
}

Reloj();
//ejecuto la funcion cada segundo, recordar que setTimeout usa milisegundos
setInterval(Reloj,1000);


function dimensionarTablero(palabras=[]) {
        var longitud=0;
        var minimo=palabras[0];
        minimo=String(minimo);
        for (var element of palabras) {
            element=String(element);
            
            if(element.length>minimo.length){
                minimo=element;
            }
            longitud+=palabras.length;
        }
        dimension=minimo.length;    
        while (dimension.length*dimension.length<longitud){
            dimension+=1;
        }
            return dimension;
        }

var array=[];

var dimension=dimensionarTablero(array);
//console.log(dimension);


function crearTablero(dimension, tablero=[]) {
    for (let index = 0; index < dimension; index++) {
        tablero[index]=new Array(dimension);
    }
    for (let i = 0; i < dimension; i++) {
        
        for (let j = 0; j < dimension; j++) {
            tablero[i][j]="0";
        }
        
    }
    return tablero;
}
var tablero=crearTablero(dimension,array)

for (let i = 0; i < array.length; i++) {
    document.writeln("<br>")
    for (let j = 0; j < array.length; j++) {
        document.write(tablero[i][j]);
        
    }
    
}

console.log(crearTablero(dimension,tablero));
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
function calcularPosicion(dimension,tablero=[]){
    if (!tablero || tablero.length === 0) {
        tablero = Array.from({ length: dimension }, () => Array(dimension).fill("0"));
    }
    do {
        var x=parseInt(Math.random()*dimension);
        var y=parseInt(Math.random()*dimension);
        var valido;
        valido=tablero[x][y];
        
    }  while (valido!=="0");
    return [x,y];
}

var posicion=calcularPosicion(dimension);
console.log(posicion);

function calcularDireccionAleatoria(dimension) {
    
    var direccion=parseInt(Math.random()*dimension);
    return direccion;
}
var direccion=calcularDireccionAleatoria(dimension);

function comprobarPosicionValida(tablero,posicion,direccion,palabra) {
    //la direccion 0 es hacia arriba, las direcciones se recorren como un reloj
    aPalabra=Array(palabra);
    switch (direccion) {
        
        case 0:
            //hacia arriba
            let longitud_y=posicion[x][y];
            var resto=(dimension-1)-longitud_y;
            if (palabra.length<resto) {
                for (let index = 0; index < aPalabra.length; index++) {
                    if(tablero[x][y]===0 || tablero[x][y]===aPalabra[index]){
                        return direccion; 
                    }
                    
                }
            }
            break;
        case 1:
            //diagonal arriba/derecha
            let aux=new Array(2);

            aux[x]=posicion[x];
            aux[x][y]=posicion[x][y];
        
            let cont=0;
            while (aux[x]!==tablero[i] || aux[x][y]!==tablero[i][j]){
                aux[x]=aux[x]+1;
                aux[x][y]=aux[x][y]+1;
                cont++;
            }
            resto=cont;
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 2:
            //hacia la derecha
            let longitud_x=posicion[x];
            var resto=(dimension-1)-longitud_x;
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 3:
            //diagonal abajo/derecha
            aux[x]=posicion[x];
            while (aux[x]!==(dimension-1) || aux[x][y]!==0){
                aux[x]=aux[x]+1;
                aux[x][y]=aux[x][y]-1;
                cont++;
            }
            resto=cont;
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 4:
            //hacia abajo
            var resto=posicion[x][y];
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 5:
            //diagonal abajo/izquierda
            while (aux[x]!==0 || aux[x][y]!==0){
                aux[x]=aux[x]-1;
                aux[x][y]=aux[x][y]-1;
                cont++;
            }
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 6:
            //hacia la izquierda
            resto=posicion[x];
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        case 7:
            //diagonal arriba/izquierda
            aux[x][y]=posicion[x][y];
            while (aux[x]!==0 || aux[x][y]!==(dimension-1)){
                aux[x]=aux[x]+1;
                aux[x][y]=aux[x][y]-1;
                cont++;
            }
            if (palabra.length<resto) {
               return direccion; 
            }
            break;
        default:
            break;
    }
}

function escribirPalabra(tablero,palabra,posicion,direccion) {

}
function pintarTablero(tablero){

}