//vamos a crear un arreglo para qcear las instrucciones

var instrucciones = ["Utilizar las flechas para mover las piezas", " Ordenar las piezas hasta alcanzar la imagen objetivo."];

//vamos a crear una variable para guardar los movimientos

var movimientos = [];

//vamos a crear una matriz que represente las posiciones del rompecabezas

var rompe = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
];

var rompeCorrecto = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
];

//necesito una variable para guardar la posciion de la pieza vacia

var filaVacia = 2;
var columnaVacia = 2;

//vamos a hacer una funcion para mostrar las instrucciones

function mostrarInstrucciones(instrucciones){
    for(var i= 0; i< instrucciones.length; i++){
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion,idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para saber cual fue el ultimo movimiento

function agregarUltimoMovimiento(direccion){
    movimientos.push(direccion);
}

//una funcion para saber si gano

function checarSiGano(){
    for(var i = 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            //comparar
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecto[i][j]){
                return false;
            }
        }
    }
    return true;
}

//necesito una funcion para mostrarla

function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("Wiiii a mimir, ya gané");
    }
    return false;
}

/*funcion que se encargue del intercambio de las pocisiones del rompecabezas

arreglo[1][2] = arreglo[0][0]
arreglo[0][0] = arreglo[1][2]*/

function intercambioPosicionesRompe(filaspos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaspos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];
    rompe[filaspos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//tengo que saber donde esta la vacia
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//tenemos que crear una funcion que se encarga de saber si la posicion es correcta

function posicionValida(fila, columna){
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

//viene la parte del mocimiento que es por parte de las flechas, hay que identificar el movimiento, arriba 38, abajo 40, izquierda 37 y derecha 39.

function MoverDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //si se mueve hacia abajo
    if(direccion === codigoDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia +1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    //Si se mueve hacia rriba
    else if(direccion === codigoDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia -1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }


    //Si se mueve hacia IZQUIERDA
    else if(direccion === codigoDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia -1;
    }

    //Si se mueve hacia DERECHA
    else if(direccion === codigoDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }

    //Checar si la nuea posicion es valida, sino intercambiarla
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        intercambioPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agregar ultimo mov
        agregarUltimoMovimiento(direccion);
    }
}

//aqui van mis codigos

var codigoDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

function intercambioPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambioPosicionesRompe(fila1, columna1, fila2, columna2);
    intercambioPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambioPosicionesDOM(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);
    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

//necesito actiualizar los mov
function actualizarUltimoMovimineto(direccion){
    var ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigoDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigoDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigoDireccion.DERECHA:
            ultimoMov.textContent = '→';
            break;
        case codigoDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;  
    }
}

function mezclarPiezas(veces){
    if(veces<= 0){
        return;
    }
    var direccion = [codigoDireccion.ABAJO, codigoDireccion.ARRIBA, codigoDireccion.DERECHA, codigoDireccion.IZQUIERDA];

    var direcciones = direccion[Math.floor(Math.random() * direccion.length)];

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces-1);
    }, 100);
}

function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigoDireccion.ABAJO || evento.which === codigoDireccion.ARRIBA || evento.which === codigoDireccion.DERECHA || evento.which === codigoDireccion.IZQUIERDA){
            moverEnDireccion(evento.which);
            actualizarUltimoMovimineto(event.which);

            var gano = checarSiGano;
            if (gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500)
            }
            evento.preventDefault;
        }
    });
}

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

iniciar();
mostrarInstrucciones(instrucciones);