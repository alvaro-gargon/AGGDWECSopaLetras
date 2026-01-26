// var arrayPalabras = [ 
//   "LUNES", 
//   "MARTES", 
//   "MIERCOLES", 
//   "JUEVES", 
//   "VIERNES", 
//   "SABADO", 
//   "DOMINGO", 
//   "ENERO", 
//   "FEBRERO", 
//   "MARZO", 
//   "ABRIL", 
//   "MAYO", 
//   "JUNIO", 
//   "JULIO", 
//   "AGOSTO", 
//   "SEPTIEMBRE", 
//   "OCTUBRE", 
//   "NOVIEMBRE", 
//   "DICIEMBRE", 
// ]; 

var arrayPalabras = [ 
  "LUNES", 
  "MARTES" 
]; 

/** 
* 
* @returns lista de las palabras ordenadas 
*/ 
export async function recibirPalabras(){
  fetch('https://random-word-api.herokuapp.com/word?number=10&lang=es')
  .then((response)=>response.json())
  .then((data)=>{
    for (let index = 0; index < data.length; index++) {
      //arrayCadenas = array donde guardo las partes de la frase si devuelve mas de una palabra
      let arrayCadenas=data[index].split(" ");
      if (arrayCadenas.length>=2) {
        if(arrayCadenas[0].length>arrayCadenas[1].length){
          data[index]=arrayCadenas[0];
        }else{
          data[index]=arrayCadenas[1];
        }
      }
      
    }
    console.log(data);
    return data;
    
  })
  .catch(() => {
    let avisoNoApi=document.getElementsByClassName("noApi")[0];
    avisoNoApi.style.display="block";
    console.log(arrayPalabras);
    return arrayPalabras;
  })
}

