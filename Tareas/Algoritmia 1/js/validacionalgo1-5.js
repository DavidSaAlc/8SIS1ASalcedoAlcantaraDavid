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
    var valor = document.formulario.muj.value;
    var valor1 = document.formulario.hom.value;
    var resul = parseInt(valor);
    var resul1 = parseInt(valor1);
    var sumaAlu = resul + resul1;
    var porcentajeM = (resul/sumaAlu)*100;
    var porcentajeH = (resul1/sumaAlu)*100;

    document.formulario.porM.value = porcentajeM + "%";
    document.formulario.porH.value = porcentajeH + "%";

}

function eliminar(){
    document.formulario.muj.value = "";
    document.formulario.hom.value = "";
}