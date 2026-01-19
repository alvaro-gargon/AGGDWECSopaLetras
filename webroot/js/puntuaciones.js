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
    esPrimero(usuario,puntuacion,dificultad=this.facil){
        dificultad.primero.puntuacion=puntuacion;
        dificultad.primero.nombre=usuario;
    }
    esSegundo(usuario,puntuacion,dificultad=this.facil){
        dificultad.segundo.puntuacion=puntuacion;
        dificultad.segundo.nombre=usuario;
    }
    esTercero(usuario,puntuacion,dificultad=this.facil){
        dificultad.tercero.puntuacion=puntuacion;
        dificultad.tercero.nombre=usuario;
    }
    // grabarPuntuaciones(puntuacion,dificultad="facil"){
    //     if (dificultad.primero==0 || dificultad.primero>puntuacion) {
    //         dificultad.primero=puntuacion;
    //     }else{
    //         if (dificultad.segundo==0 || dificultad.segundo>puntuacion) {
    //             dificultad.segundo=puntuacion;
    //         }else{
    //             if (dificultad.tercero==0 || dificultad.tercero>puntuacion) {
    //                 dificultad.tercero=puntuacion;
    //             }
    //         }
    //     }
    // }
    mostrarPuntuaciones(dificultad="facil"){
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
