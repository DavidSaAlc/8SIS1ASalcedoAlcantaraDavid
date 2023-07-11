//vamos a crear una funcion que se encargue de aperturar la pagina y tome las dimesiones y se adecue al tamaño de la resolucion

window.onload = () => {
    //queremos que cargue un carrucel de imagenes 
    const imagenes = [
        //aqui debo de incorporar las url
        "https://images.alphacoders.com/127/1277109.jpg",
        "https://images4.alphacoders.com/801/80134.jpg",
        "https://images8.alphacoders.com/356/356391.jpg",
        "https://images8.alphacoders.com/371/371786.jpg"
    ];

    /*
    Vamos a crear una API que podamos controlar desde el DOM, para poder acceder a todos los elementos del HTML para esto vamos a necesitar primeramente obtener los id de cada uno de los componentes que abacar el documento
    */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    //vamos a necesitar crear una funcion que se encargue de ir al siguiente

    const imagenActual = 0;

    const imagenSiguiente = () => {
        //primero tenemos que acceder al arreglo de las imagenes que tenemos
        if(imagenActual < imagenes.length -1){
            imagenActual++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };

    const imagenAnterior = () => {
        //primero tenemos que acceder al arreglo de las imagenes que tenemos
        if(imagenActual > 0 ){
            imagenActual--;
        }else{
            imagenActual = imagenes.length-1;
        }
        display.src = imagenes[imagenActual];
    };

    const pantallaCompleta = () => {
        //esta funcion es especial, porque dbee de ser programada como una promesa las promesas en js son solicitudes con el objeto request con la esperanza de que nos devuelva una respuesta en el caso x de tiempo asincrono
        display.requestFullscreen;
    };

    const mostrarMensaje = () =>{
        /*
        Para mostrar los mensajes es necesario modificar el comportamiento de los compoentes del html, porque vamso a agregar nuevos componentes o nuevos comportamientos desde el JS
         */
        mensajes.innerHTML += `${campoMensaje.value}<br/>`;
        campoMensaje.value = "";
        /* 
        Si queremos manipular otro elementos de los componetes del html, o queremos crear nuevos utilizamos:
        createElement por ejemplo
        const lista = document.createElement("ul");
        const elementoLista = document.createElement("li");

        elementoLista.onclick = pantallaCompleta;
        elementoLista.innerHTML = `${campoMensaje.value}`;
        lista.append(elementolista);
        mensajes.append(lista);
        */
    };

    const cambiarColor = () => {
        colorValor.click();
    };

    const inicializar = () => {
        //primero necesitamos asignar a la API los eventos
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        colorValor.onchange = () => {
            mensajes.style.color = colorValor.value;
        };

        //debo de enviar el incide de la primera imagen
        display.src = imagenes[0];
    };

    inicializar();
}