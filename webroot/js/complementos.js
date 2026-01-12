import{arrayPalabras} from './tablero.js';
import{juegoFinalizado} from './tablero.js';
import{Puntuaciones} from './puntuaciones.js';
var puntuaciones= new Puntuaciones();

if(navigator.cookieEnabled==false){
    alert("Cookies desactivadas, no se guardarán las puntuaciones");
}
if(navigator.onLine==false){
    let mensaje=document.getElementById("offline");
    mensaje.style.display="block";
}
console.log(arrayPalabras.length);

    let puntuacion1=document.querySelector("#puntuaciones tr:nth-child(2) td:nth-child(2)");
    let puntuacion2=document.querySelector("#puntuaciones tr:nth-child(3) td:nth-child(2)");
    let puntuacion3=document.querySelector("#puntuaciones tr:nth-child(4) td:nth-child(2)");

function mostrarTiemposTablaPuntuacionInicio() {
    puntuacion1.textContent=localStorage.getItem("puntuacion1");
    puntuacion2.textContent=localStorage.getItem("puntuacion2");
    puntuacion3.textContent=localStorage.getItem("puntuacion3");
}
mostrarTiemposTablaPuntuacionInicio();
function rellenarTablaPuntuacion(puntuacion,dificultad="facil") {
    let tabla=document.getElementById("puntuaciones");
    console.log(localStorage.getItem("puntuacion1"));
    
    console.log(puntuacion1);
    if(Number(localStorage.getItem("puntuacion1"))>puntuacion || localStorage.getItem("puntuacion1")==null){
        let puntuacionSuperada=tabla.children[1];
        puntuacion1.innerHTML=puntuacion;
        localStorage.setItem("puntuacion1",puntuacion);
        puntuaciones.esPrimero(puntuacion);
    }else{
        if(Number(localStorage.getItem("puntuacion2"))>puntuacion || localStorage.getItem("puntuacion2")==null){
            let puntuacionSuperada=puntuacion2;
            puntuacion2.innerHTML=puntuacion;
            localStorage.setItem("puntuacion2",puntuacion);
            puntuaciones.esSegundo(puntuacion);
        }else{
            if(Number(localStorage.getItem("puntuacion3"))>puntuacion || localStorage.getItem("puntuacion3")==null){
                puntuacion3.innerHTML=puntuacion;
                localStorage.setItem("puntuacion3",puntuacion);
                puntuaciones.esTercero();
            }
        }
    }
}

function Reloj(){
   let contador=0; 
   let actual=new Date();
   let horas=actual.getHours();
   let minutos=actual.getMinutes();
   let segundos=actual.getSeconds();
   let aDigitos=[];
   //Convertimos los números de un dígito a dos dígitos y los metemos en un array
   let digito1hora=parseInt(horas/10);
   aDigitos.push(digito1hora);
   let digito2hora=horas%10;
   aDigitos.push(digito2hora);

   let digito1minuto=parseInt(minutos/10);
   aDigitos.push(digito1minuto);
   let digito2minuto=minutos%10;
   aDigitos.push(digito2minuto);

   let digito1segundo=parseInt(segundos/10);
   aDigitos.push(digito1segundo);
   let digito2segundo=segundos%10;
   aDigitos.push(digito2segundo);

   var reloj = document.getElementById("reloj");
    
   //recorremos el array de hijos de children cambiando el atributo src de cada imagen para poner el digito correspondiente
   for (const image of reloj.children) {
    if(image.getAttribute("alt")=="colon"){
            image.setAttribute("src","webroot/imagesHour/colon.png");
        }else{
            image.setAttribute("src","webroot/imagesHour/"+aDigitos[contador]+".png");
            contador++;
        }
   }
}

Reloj();
//ejecuto la funcion cada segundo, recordar que setInterval usa milisegundos
setInterval(Reloj,1000);
    
    var boton= document.getElementsByTagName("button")[0];
    let cronometro;
    let tiempoFinal;
    boton.addEventListener("click",(ev)=>{
        let sopaDeLetras=document.getElementsByClassName("contenedorSopaLetras")[0];
        sopaDeLetras.setAttribute('style','visibility: visible;');
        let segundos=0;
        let minutos=0;
        function tiempoPasando() {
            let temporizador=document.getElementById("temporizador");
            let aciertos=parseInt(document.getElementById("aciertos").textContent);
            if (segundos===60) {
                minutos++;
                segundos=0;
            }else{
                segundos++;
            }
            temporizador.innerText=minutos+":"+(segundos<10 ? "0"+segundos : segundos);
            if (arrayPalabras.length===aciertos) {
                juegoFinalizado=true;
                clearInterval(cronometro);
                tiempoFinal=(minutos*60+segundos);
                rellenarTablaPuntuacion(tiempoFinal)
                return;
            }
        }
        cronometro=setInterval(tiempoPasando,1000);
        tiempoPasando();
    });