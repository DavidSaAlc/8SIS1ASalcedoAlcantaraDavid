function validar(formulario){
    //Hay varias formas para poder obtener los parámetros del formulario.
//6

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.edad.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++){
            if (ch == checkOk.charAt(j)){
                break;
            }

        }
        if (j == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Año de nacimiento.");
        formulario.edad.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.ano.value;

    var todoesValido = true;


    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var x = 0; x < checkString.length; x++){
        var ch = checkString.charAt(x);
        for (var y = 0; y < checkOk.length; y++){
            if (ch == checkOk.charAt(y)){
                break;
            }

        }
        if (y == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo Año actual.");
        formulario.ano.focus();
        return false;
    }

    var ano = parseInt(document.getElementById("ano").value);
    var edad = parseInt(document.getElementById("edad").value);
    var resta = ano - edad;

    alert("Su edad actual es: " + resta + " años.");
}







//5
//Crear una funcion que se encarga de validar la entrada de datos

function Com(event, el){//Validar nombre	
    //Obteniendo posicion del cursor 
    var val = el.value;//Valor de la caja de texto
    var pos = val.slice(0, el.selectionStart).length;
	
    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos
	
    //Filtar solo los numeros
    for (var i=0; i<val.length; i++){
       if (filtro.indexOf(val.charAt(i)) != -1){
	     v++;
	     out += val.charAt(i);		   
	     //Agregando un espacio cada 4 caracteres
	     if((v==4) || (v==8))
	         out+='';
	   }
    }
    //Reemplazando el valor
    el.value = out;
	
    //En caso de modificar un numero reposicionar el cursor
    if(event.keyCode==8){//Tecla borrar precionada
        el.selectionStart = pos;
        el.selectionEnd = pos;
    }

    


    var teclado = (document.all)?e.keyCode : e.which;
    
    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo =String.fromCharCode(teclado);

    return patron.test(codigo);
}

function Comi(event, el){//Validar nombre	
    //Obteniendo posicion del cursor 
    var val = el.value;//Valor de la caja de texto
    var pos = val.slice(0, el.selectionStart).length;
	
    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos
	
    //Filtar solo los numeros
    for (var i=0; i<val.length; i++){
       if (filtro.indexOf(val.charAt(i)) != -1){
	     v++;
	     out += val.charAt(i);		   
	     //Agregando un espacio cada 4 caracteres
	     if((v==4) || (v==8))
	         out+='';
	   }
    }
    //Reemplazando el valor
    el.value = out;
	
    //En caso de modificar un numero reposicionar el cursor
    if(event.keyCode==8){//Tecla borrar precionada
        el.selectionStart = pos;
        el.selectionEnd = pos;
    }

    


    var teclado = (document.all)?e.keyCode : e.which;
    
    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo =String.fromCharCode(teclado);

    return patron.test(codigo);
}


function interes(){
    var valor = document.formulario.ano.value;
    var valor1 = document.formulario.act.value;
    var resul = parseInt(valor);
    var resul1 = parseInt(valor1);
    var resta = resul1 - resul;

    document.formulario.edad.value = resta;

}

function eliminar(){
    document.formulario.ano.value = "";
    document.formulario.act.value = "";
}