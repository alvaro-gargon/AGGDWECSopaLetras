import {rellenarTablaPuntuacion} from "./tablaPuntuaciones.js";
import{arrayPalabras} from './tablero.js';
var boton= document.getElementsByTagName("button")[0];
    let cronometro;
    let tiempoFinal;
    let jugando=false;
    boton.addEventListener("click",(ev)=>{
        console.log(jugando);
        if (jugando===false) {
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
            
        }
        jugando=true;
    });