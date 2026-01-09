export class Puntuaciones{
    constructor(){
        this.facil={
            primero: {
                nombre:"",
                puntuacion:0
            },
            segundo: {
                nombre:"",
                puntuacion:0
            },
            tercero: {
                nombre:"",
                puntuacion:0
            }
        },
        this.medio={
            primero: {
                nombre:"",
                puntuacion:0
            },
            segundo: {
                nombre:"",
                puntuacion:0
            },
            tercero: {
                nombre:"",
                puntuacion:0
            }
        },
        this.dificil={
            primero: {
                nombre:"",
                puntuacion:0
            },
            segundo: {
                nombre:"",
                puntuacion:0
            },
            tercero: {
                nombre:"",
                puntuacion:0
            }
        }
    }
    grabarPuntuaciones(puntuacion,dificultad){
        if (dificultad.primero==0 || dificultad.primero>puntuacion) {
            dificultad.primero=puntuacion;
        }else{
            if (condition) {
                
            }
        }
    }
    mostrarPuntuaciones(dificultad){
        var aDatos=[];
        aDatos.push=this.dificultad.primero.nombre;
        aDatos.push=this.dificultad.primero.puntuacion;
        aDatos.push=this.dificultad.segundo.nombre;
        aDatos.push=this.dificultad.segundo.puntuacion;
        aDatos.push=this.dificultad.tercero.nombre;
        aDatos.push=this.dificultad.tercero.puntuacion;
        return aDatos;
    }
}
