function dimensionarTablero(palabras=[]) {
    var longitud=0;
    var dimension=palabras[0];
        for (const element of palabras) {
            if(element.length>dimension.length){
                dimension=element;
            }
            longitud+=palabras.length;
        }    
        while (dimension*dimension<longitud){
            dimension+=1;
        }
    return dimension;
}

var tablero=[null];
var dimension=dimensionarTablero(tablero);

function crearTablero(dimension, tablero) {
    tablero=[dimension][dimension];
    document.writeln(tablero);
}
crearTablero(dimension,tablero);
function calcularPosicion(dimension){
    while (tablero[[x],[y]]!=null) {
        x=Math.random()*dimension-1;
        y=Math.random()*dimension-1;
    }
    return posiciones[x,y];
}
function calcularDireccion() {
    
}