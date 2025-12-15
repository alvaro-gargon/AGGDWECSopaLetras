import{arrayPalabras} from './tablero.js';

if(navigator.cookieEnabled==false){
    alert("Cookies desactivadas, no se guardarán las puntuaciones");
}
if(navigator.onLine==false){
    let mensaje=document.getElementById("offline");
    mensaje.style.display="block";
}
console.log(arrayPalabras.length);

function rellenarTablaPuntuacion(puntuacion) {
    let tabla=document.getElementById("puntuaciones");
    console.log(localStorage.getItem("puntuacion1"));
    let puntuacion1=document.querySelector("#puntuaciones tr:nth-child(2) td:nth-child(1)").textContent;
    let puntuacion2=document.querySelector("#puntuaciones tr:nth-child(3) td:nth-child(1)").textContent;
    let puntuacion3=document.querySelector("#puntuaciones tr:nth-child(4) td:nth-child(1)").textContent;
    console.log(puntuacion1);
    if(localStorage.getItem("puntuacion1")>puntuacion || puntuacion1=="Sin tiempo"){
        console.log("entra maldito bastardo");
        let puntuacionSuperada=tabla.children[1];
        puntuacion1.textContent=puntuacion;
        localStorage.setItem("puntuacion1",puntuacion);

        if(localStorage.getItem("puntuacion1")>puntuacion){
            puntuacion1.innerHTML=puntuacionSuperada;
            localStorage.setItem("puntuacion2",puntuacionSuperada);
        }
        
    }else{
        if(localStorage.getItem("puntuacion2")>puntuacion || puntuacion2=="Sin tiempo"){
            let puntuacionSuperada=puntuacion2;
            puntuacion2.innerHTML=puntuacion;
            localStorage.setItem("puntuacion2",puntuacion);
        
            if(localStorage.getItem("puntuacion2")>puntuacion){
                puntuacion3.innerHTML=puntuacionSuperada;
                localStorage.setItem("puntuacion3",puntuacionSuperada);
            }
        }else{
            if(localStorage.getItem("puntuacion3")>puntuacion || puntuacion3=="Sin tiempo"){
                puntuacion3.innerHTML=puntuacion;
                localStorage.setItem("puntuacion3",puntuacion);
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
                clearInterval(cronometro);
                tiempoFinal=(minutos*60+segundos);
                rellenarTablaPuntuacion(tiempoFinal)
                return;
            }
        }
        cronometro=setInterval(tiempoPasando,1000);
        
    });