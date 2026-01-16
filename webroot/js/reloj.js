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