if(navigator.cookieEnabled==false){
    alert("Cookies desactivadas, no se guardarán las puntuaciones");
}
if(navigator.onLine==false){
    let mensaje=document.getElementById("offline");
    mensaje.style.display="block";
}


function rellenarTablaPuntuacion(puntuacion) {
    let tabla=document.getElementById("puntuaciones");
    


    if(localStorage.getItem("puntuacion1")>puntuacion || tabla.children[1]=="Sin tiempo"){
        let puntuacionSuperada=tabla.children[1];
        tabla.children[1].innerHTML=puntuacion;
        localStorage.setItem("puntuacion1",puntuacion);

        if(localStorage.getItem("puntuacion1")>puntuacion){
            tabla.children[2].innerHTML=puntuacionSuperada;
            localStorage.setItem("puntuacion2",puntuacionSuperada);
        }
        
    }else{
        if(localStorage.getItem("puntuacion2")>puntuacion || tabla.children[2]=="Sin tiempo"){
        let puntuacionSuperada=tabla.children[2];
        tabla.children[2].innerHTML=puntuacion;
        localStorage.setItem("puntuacion2",puntuacion);
        
        if(localStorage.getItem("puntuacion2")>puntuacion){
            tabla.children[3].innerHTML=puntuacionSuperada;
            localStorage.setItem("puntuacion3",puntuacionSuperada);
        }
        }else{
            if(localStorage.getItem("puntuacion3")>puntuacion || tabla.children[3]=="Sin tiempo"){
            tabla.children[3].innerHTML=puntuacion;
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
        boton.addEventListener("click",(ev)=>{
        let sopaDeLetras=document.getElementsByClassName("contenedorSopaLetras")[0];
        sopaDeLetras.setAttribute('style','visibility: visible;');
        let segundos=0;
        let minutos=0;
        function tiempoPasando() {
            let temporizador=document.getElementById("temporizador");
            if (segundos===60) {
                minutos++;
                segundos=0;
            }else{
                segundos++;
            }
            temporizador.innerText=minutos+":"+(segundos<10 ? "0"+segundos : segundos);
        }
        setInterval(tiempoPasando,1000);
    });

