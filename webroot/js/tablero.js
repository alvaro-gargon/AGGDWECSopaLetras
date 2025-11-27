var arrayPalabras = [ 
  "LUNES", 
  "MARTES", 
  "MIERCOLES", 
  "JUEVES", 
  "VIERNES", 
  "SABADO", 
  "DOMINGO", 
  "ENERO", 
  "FEBRERO", 
  "MARZO", 
  "ABRIL", 
  "MAYO", 
  "JUNIO", 
  "JULIO", 
  "AGOSTO", 
  "SEPTIEMBRE", 
  "OCTUBRE", 
  "NOVIEMBRE", 
  "DICIEMBRE", 
]; 

function mostrarPalabras(arrayPalabras){
  let arrayBuscar=arrayPalabras;
  let caja=document.getElementById("palabrasClave");
  for (const palabra of arrayBuscar) {
    const span = document.createElement("span");
    span.textContent = palabra+", ";
    caja.appendChild(span);
  }
}
 
/** 
* 
* @returns lista de las palabras ordenadas 
*/ 
function recibirPalabras() { 
  let palabra; 
  let lista = [];
  do { 
    palabra = prompt("Introduzca un palabra. Cancelar para salir."); 
    if (palabra !== null) { 
      //para que no tome en cuenta el null como parte del array. 
      lista.push(palabra); 
    } 
  } while (palabra !== null); 
  lista.sort((a, b) => a.length - b.length); 
  return lista; 
} 
 
/** 
* @param (array) lista de las palabras ordenadas 
* @returns (int) dimension de la matriz 
*/ 
function calcularDimensiones(lista) { 
  let dimension; 
  let num_letras = 0; 
  for (const element of lista) { 
    num_letras += element.length; 
  } 
  if (Math.floor(Math.sqrt(num_letras * 2)) + 1 > lista[0].length + 2) { 
    dimension = Math.floor(Math.sqrt(num_letras * 2)) + 1; 
  } else { 
    dimension = lista[0].length + 2; 
  } 
  return dimension; 
} 
 
/** 
* @param (int) dimension de la matriz 
* @returns (array) creacion e inicializacion del tablero 
*/ 
function crearTablero(dimension) { 
  let tablero = [[]]; 
  for (let i = 0; i < dimension; i++) { 
    tablero[i] = []; //inicializar 
    for (let j = 0; j < dimension; j++) { 
      tablero[i][j] = null; 
      
    } 
  } 
  return tablero; 
} 
 
/** 
* @param (array) tablero 
* @returns (array) tabla rellena con las letras aleatorias 
*/ 
 
function rellenarTablero(tablero) { 
  let tabla = tablero; 
  let abecedario = [ 
  "A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "Ñ", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z", 
]; 
  for (let i = 0; i < tabla.length; i++) { 
    for (let j = 0; j < tabla.length; j++) { 
      if (tabla[i][j] === null) { 
        //si la casilla no esta ocupada rellenar aleatoriamente 
        tabla[i][j] = abecedario[Math.floor(Math.random() * 27)]; 
      } 
    } 
  } 
  return tabla; 
} 
 
/** 
* @param (array) tablero 
* @returns (array) tabla rellena con las letras aleatorias 
*/ 
 
function calcularPosicionInicial(lista, tablero) { 
  let fila ; 
  let columna; 
  let direcciones; 
  let direccion; 
  let acumDireccion; 
  let acumPosicion; 
  let palabra; 
  let direccionCorrecta; 
  let f; 
  let c; 
   
for (const element of lista) { 
  palabra=element; 
  acumPosicion = 1; 
  do { 
    fila = Math.floor(Math.random() * tablero.length); 
    columna = Math.floor(Math.random() * tablero.length); 
    direcciones = ["a", "ad", "d", "bd", "b", "bi", "i", "ai"] 
    acumDireccion = 1; 
    direccionCorrecta = false; 
    do { 
      f = fila; 
      c = columna; 
      direccion = direcciones[Math.floor(Math.random() * direcciones.length)]; 
      switch (direccion) { 
        case "a": 
          if (fila - palabra.length - 1 >= 0) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f--; 
              } 
            } 
          } 
          break; 
        case "ad": 
          if ( 
            fila - palabra.length - 1 >= 0 && 
            columna + palabra.length - 1 < tablero.length 
          ) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f--; 
                c++; 
              } 
            } 
          } 
          break; 
        case "d": 
          if (columna + palabra.length - 1 < tablero.length) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                c++; 
              } 
            } 
          } 
          break; 
        case "bd": 
          if ( 
            columna + palabra.length - 1 < tablero.length && 
            fila + palabra.length - 1 < tablero.length 
          ) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f++; 
                c++; 
              } 
            } 
          } 
          break; 
        case "b": 
          if (fila + palabra.length - 1 < tablero.length) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f++; 
              } 
            } 
          } 
          break; 
        case "bi": 
          if ( 
            fila + palabra.length - 1 < tablero.length && 
            columna - palabra.length - 1 >= 0 
          ) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f++; 
                c--; 
              } 
            } 
          } 
          break; 
        case "i": 
          if (columna - palabra.length - 1 >= 0) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                c--; 
              } 
            } 
          } 
          break; 
        case "ai": 
          if ( 
            columna - palabra.length - 1 >= 0 && 
            fila - palabra.length - 1 >= 0 
          ) { 
            direccionCorrecta = true; 
            if (direccionCorrecta) { 
              for (let l = 0; l < palabra.length; l++) { 
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) { 
                  direccionCorrecta = false; 
                } 
                f--; 
                c--; 
              } 
            } 
          } 
          break; 
 
        default: 
          break; 
      } 
      if (!direccionCorrecta) { 
        direcciones.splice(direcciones.indexOf(direccion), 1); //para borrar la direccion en curso para que no se repita. 
      } else { 
        console.log(direccion, fila, columna); 
        tablero = escribirPalabras(fila, columna, direccion, palabra, tablero); 
      } 
 
      acumDireccion++; 
    } while (!direccionCorrecta && acumDireccion <= 8); 
    acumPosicion++; 
  } while ( 
    !direccionCorrecta && 
    acumPosicion <= tablero.length * tablero[0].length 
  ); //miestras que la direccion no sea valida y no haya recorrido el numero total de casillas 
} 
  return tablero; 
} 
 
function escribirPalabras(fila, columna, direccion, palabra, tablero) { 
  switch (direccion) { 
    case "a": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila--; 
      } 
 
      break; 
    case "ad": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila--; 
        columna++; 
      } 
      break; 
    case "d": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        columna++; 
      } 
      break; 
    case "bd": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila++; 
        columna++; 
      } 
      break; 
    case "b": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila++; 
      } 
      break; 
    case "bi": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila++; 
        columna--; 
      } 
      break; 
    case "i": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        columna--; 
      } 
      break; 
    case "ai": 
      for (let l = 0; l < palabra.length; l++) { 
        tablero[fila][columna] = palabra[l]; 
        fila--; 
        columna--; 
      } 
      break; 
 
    default: 
      break; 
  } 
  return tablero; 
} 
 
function mostrarTabla(tablero) { 
    const tabla=document.createElement("table"); 
      for (let i = 0; i < tablero.length; i++) { 
        const fila=document.createElement("tr") 
        for (let j = 0; j < tablero[i].length; j++) { 
          const celda=document.createElement("td");
          celda.setAttribute("data-fila",(i+1));
          celda.setAttribute("data-columna",(j+1));
            celda.addEventListener("click",(ev)=>{
            //si ya hay una celda selccionada
            if(document.getElementsByClassName("seleccionado").length!==0){
              let celdaPrimera = document.getElementsByClassName("seleccionado")[0];
              //si las celdas selecciondas se encuentran en una direccion correcta
              if (celdaPrimera.getAttribute("data-fila")==celda.getAttribute("data-fila") || celdaPrimera.getAttribute("data-columna")==celda.getAttribute("data-columna") || 
                Math.abs(celdaPrimera.getAttribute("data-fila")-celda.getAttribute("data-fila"))==Math.abs(celdaPrimera.getAttribute("data-columna")-celda.getAttribute("data-columna"))) {
                  var contador=0;//variable para indicar el indice del arrayContenido para poder rellenarlo
                  //seleccionar el contenido de entre celdas seleccionadas
                      
                  var arrayContenido=[];//array donde meto las letras
                  //en el caso en el que la fila es la misma
                  if (celdaPrimera.getAttribute("data-fila")==celda.getAttribute("data-fila")) {
                    let aux=0;
                    let fila=Number(celdaPrimera.getAttribute("data-fila"));
                    let columna=Number(celdaPrimera.getAttribute("data-columna"));
                    //celda seleccionada hace referencia a la celda que se clico en primer lugar
                    let celdaSeleccionada=null;

                    let selector='[data-fila="'+fila+'"][data-columna="'+(columna)+'"]';
                    celdaSeleccionada=document.querySelector(selector);
                    while (celdaSeleccionada.getAttribute("data-columna")!==celda.getAttribute("data-columna")) {
                      
                      let selector='[data-fila="'+fila+'"][data-columna="'+(columna+aux)+'"]';
                      celdaSeleccionada=document.querySelector(selector);
                      console.log(celdaSeleccionada.getAttribute("data-columna"));
                      if(celdaSeleccionada.getAttribute("data-columna")<celda.getAttribute("data-columna")){
                        aux++;
                      }else{
                        aux--;
                      }
                      arrayContenido[contador]=celdaSeleccionada.textContent;
                      contador++;
                      celdaSeleccionada.classList.add("seleccionado");
                      
                    }
                  }else{
                    //en el caso en el que la columna es la misma
                    if (celdaPrimera.getAttribute("data-columna")==celda.getAttribute("data-columna")) {
                      let aux=0;
                      let fila=Number(celdaPrimera.getAttribute("data-fila"));
                      let columna=Number(celdaPrimera.getAttribute("data-columna"));
                      //celda seleccionada hace referencia a la celda que se clico en primer lugar
                      let celdaSeleccionada=null;
                      
                      let selector='[data-fila="'+fila+'"][data-columna="'+(columna)+'"]';
                      celdaSeleccionada=document.querySelector(selector);
                      while (celdaSeleccionada.getAttribute("data-fila")!==celda.getAttribute("data-fila")) {
                        
                        let selector='[data-fila="'+(fila+aux)+'"][data-columna="'+(columna)+'"]';
                        celdaSeleccionada=document.querySelector(selector);
                        if(celdaSeleccionada.getAttribute("data-fila")<celda.getAttribute("data-fila")){
                          aux++;
                        }else{
                          aux--;
                        }
                        arrayContenido[contador]=celdaSeleccionada.textContent;
                        contador++;
                        celdaSeleccionada.classList.add("seleccionado");
                        
                      }
                    }else{
                      //en el caso en el que la palabra este en diagonal
                      let auxFila=0;
                      let auxColumna=0;
                      let fila=Number(celdaPrimera.getAttribute("data-fila"));
                      let columna=Number(celdaPrimera.getAttribute("data-columna"));
                      //celda seleccionada hace referencia a la celda que se clico en primer lugar
                      let celdaSeleccionada=null;
                      
                      let selector='[data-fila="'+fila+'"][data-columna="'+(columna)+'"]';
                      celdaSeleccionada=document.querySelector(selector);
                      while (celdaSeleccionada.getAttribute("data-fila")!==celda.getAttribute("data-fila") && 
                      celdaPrimera.getAttribute("data-columna")!==celda.getAttribute("data-columna")) {
                        
                        let selector='[data-fila="'+(fila+auxFila)+'"][data-columna="'+(columna+auxColumna)+'"]';
                        celdaSeleccionada=document.querySelector(selector);
                        if(celdaSeleccionada.getAttribute("data-fila")<celda.getAttribute("data-fila")){
                          auxFila++;
                        }else{
                          auxFila--;
                        }
                        if(celdaSeleccionada.getAttribute("data-columna")<celda.getAttribute("data-columna")){
                          auxColumna++;
                        }else{
                          auxColumna--;
                        }
                        arrayContenido[contador]=celdaSeleccionada.textContent;
                        contador++;
                        celdaSeleccionada.classList.add("seleccionado");
                      }
                    }
                  }
                  //declaramos la palabra 
                  var palabra;
                  var palabraReverse;
                  //relleno la palabra en la direccion recogida
                  console.log(arrayContenido);
                  for (const letra of arrayContenido) {
                    palabra=palabra+letra
                  }
                  //relleno la palabra en la direccion contratia a la recogida
                  for (const letra of arrayContenido.reverse()) {
                    palabraReverse=palabraReverse+letra
                  }
                  //comprobamos si la palabra se encuentra en alguna de las direcciones
                  if(arrayPalabras.includes(palabra) || arrayPalabras.includes(palabraReverse)){
                    celda.classList.add("correcta");
                    celda.classList.remove("seleccionado");
                  }else{
                    celda.classList.remove("seleccionado");
                    setTimeout(() => {
                      celda.classList.add("incorrecta");
                    }, 1000);
                  }
              }//si las celdas seleccionadas se encuentran en una posicion incorrecta
              else{
                alert("Direccion equivocada");
                celdaPrimera.classList.remove("seleccionado");
              }
            }//si no hay una celda seleccionada
            else{
              celda.classList.add("seleccionado");
            }
          })
          
          celda.textContent=tablero[i][j] ; 
          fila.appendChild(celda); // añade las celdas dentro de las filas. 
        } 
        tabla.appendChild(fila);//añade las filas dentro de la tabla 
      } 
      const contenedorSopaLetras = document.querySelector(".contenedorSopaLetras"); 
    contenedorSopaLetras.appendChild(tabla);// añade la tabla al documento 
} 
 
// console.log(crearTablero(calcularDimensiones(arrayPalabras))); 
let sopaDeLetras = crearTablero(calcularDimensiones(arrayPalabras)); 
sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras); 
// console.log(sopaDeLetras); 
sopaDeLetras=rellenarTablero(sopaDeLetras); 
// console.log(sopaDeLetras); 
mostrarTabla(sopaDeLetras); 
mostrarPalabras(arrayPalabras);