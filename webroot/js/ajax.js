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
export async function recibirPalabras() {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=10&lang=es",
    );
    let data = await response.json();
    data = data.map((palabra) => {
      const partes = palabra.split(" ");
      return partes.length >= 2
        ? partes[0].length > partes[1].length
          ? partes[0]
          : partes[1]
        : palabra;
    });
    return data;
  } catch (error) {
    let avisoNoApi = document.getElementsByClassName("noApi")[0];
    avisoNoApi.style.display = "block";
    return arrayPalabras;
  }
}

