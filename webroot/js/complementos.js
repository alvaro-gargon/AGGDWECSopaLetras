
import{Puntuaciones} from './puntuaciones.js';
var puntuaciones= new Puntuaciones();

if(navigator.cookieEnabled==false){
    alert("Cookies desactivadas, no se guardarán las puntuaciones");
}
if(navigator.onLine==false){
    let mensaje=document.getElementById("offline");
    mensaje.style.display="block";
}

    let puntuacion1=document.querySelector("#puntuaciones tr:nth-child(2) td:nth-child(2)");
    let puntuacion2=document.querySelector("#puntuaciones tr:nth-child(3) td:nth-child(2)");
    let puntuacion3=document.querySelector("#puntuaciones tr:nth-child(4) td:nth-child(2)");

function mostrarTiemposTablaPuntuacionInicio() {
    puntuacion1.textContent=localStorage.getItem("puntuacion1");
    puntuacion2.textContent=localStorage.getItem("puntuacion2");
    puntuacion3.textContent=localStorage.getItem("puntuacion3");
}
mostrarTiemposTablaPuntuacionInicio();
export function rellenarTablaPuntuacion(puntuacion,dificultad="facil") {
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
