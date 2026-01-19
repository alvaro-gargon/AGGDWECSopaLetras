
import{Puntuaciones} from './puntuaciones.js';
var puntuaciones= new Puntuaciones();
//segunda columna de la tabla puntuaciones
let puntuacion1=document.querySelector("#puntuaciones tr:nth-child(2) td:nth-child(2)");
let puntuacion2=document.querySelector("#puntuaciones tr:nth-child(3) td:nth-child(2)");
let puntuacion3=document.querySelector("#puntuaciones tr:nth-child(4) td:nth-child(2)");
//primera columna de la tabla puntuaciones
let nombre1=document.getElementById("usuario1");
let nombre2=document.getElementById("usuario2");
let nombre3=document.getElementById("usuario3");
//funcion para rellenar la tabla puntuaciones con los nombres y puntuaciones
function mostrarTiemposTablaPuntuacionInicio() {
    puntuacion1.textContent=localStorage.getItem("puntuacion1");
    puntuacion2.textContent=localStorage.getItem("puntuacion2");
    puntuacion3.textContent=localStorage.getItem("puntuacion3");

    if(localStorage.getItem("usuario1")!=null){
        nombre1.setAttribute("placeholder",localStorage.getItem("usuario1"));
    }
    if (localStorage.getItem("usuario2")!=null) {
        nombre2.setAttribute("placeholder",localStorage.getItem("usuario2"));
        console.log(nombre2.value);
    }
    if (localStorage.getItem("usuario3")!=null) {
        nombre3.setAttribute("placeholder",localStorage.getItem("usuario3"));
    }
    
}
mostrarTiemposTablaPuntuacionInicio();
export function rellenarTablaPuntuacion(puntuacion,dificultad="facil") {
    let tabla=document.getElementById("puntuaciones");
    console.log(localStorage.getItem("puntuacion1"));
    
    console.log(puntuacion1);
    if(Number(localStorage.getItem("puntuacion1"))>puntuacion || localStorage.getItem("puntuacion1")==null){
        nombre1.disabled=false;
        nombre1.focus()
        let usuarioSuperado=localStorage.getItem("usuario1");
        let puntuacionSuperada=tabla.rows[1].cells[1].textContent;
        puntuacion1.innerHTML=puntuacion;
        localStorage.setItem("puntuacion1",puntuacion);
        nombre1.addEventListener("focusout", () => {
            localStorage.setItem("usuario1",nombre1.value);
            puntuaciones.esPrimero(nombre1.value,puntuacion);
        });  
        //codigo para que la puntuacion baje de posicion (de 1º a 2º)
        if (localStorage.getItem("usuario2")!=null) {
            puntuacion2.innerHTML=puntuacionSuperada;
            nombre2.innerHTML=usuarioSuperado;
            localStorage.setItem("puntuacion2",puntuacionSuperada);
            localStorage.setItem("usuario2",usuarioSuperado);
            puntuaciones.esSegundo(nombre2.value,puntuacionSuperada);
        }
    }else{
        if(Number(localStorage.getItem("puntuacion2"))>puntuacion || localStorage.getItem("puntuacion2")==null){
            nombre2.disabled=false;
            nombre2.focus()
            let puntuacionSuperada=puntuacion2.textContent;
            puntuacion2.innerHTML=puntuacion;
            localStorage.setItem("puntuacion2",puntuacion);
            nombre1.addEventListener("focusout", () => {
                localStorage.setItem("usuario2",nombre2.value);
                puntuaciones.esPrimero(nombre2.value,puntuacion);
            });
            //codigo para que la puntuacion baje de posicion (de 2º a 3º)
            if (localStorage.getItem("usuario3")!=null) {
                puntuacion3.innerHTML=puntuacionSuperada;
                localStorage.setItem("puntuacion3",puntuacionSuperada);
                puntuaciones.esTercero(nombre2.value,puntuacionSuperada);
            }   
        }else{
            if(Number(localStorage.getItem("puntuacion3"))>puntuacion || localStorage.getItem("puntuacion3")==null){
                nombre3.disabled=false;
                nombre3.focus()
                puntuacion3.innerHTML=puntuacion;
                localStorage.setItem("puntuacion3",puntuacion);
                nombre1.addEventListener("focusout", () => {
                    localStorage.setItem("usuario3",nombre3.value);
                    puntuaciones.esTercero(nombre3.value,puntuacion);
                });
            }
        }
    }
}
