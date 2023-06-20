//1
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

function Comis(event, el){//Validar nombre	
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

function sueldo(event, el){//Validar nombre	
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
    var valor = document.formulario.com1.value;
    var valor1 = document.formulario.com2.value;
    var valor2 = document.formulario.com3.value;
    var valor3 = document.formulario.sueldo.value;
    var resul = parseInt(valor);
    var resul1 = parseInt(valor1);
    var resul2 = parseInt(valor2);
    var resul3 = parseInt(valor3);
    var comision1 = (resul/100)*10;
    var comision2 = (resul1/100)*10;
    var comision3 = (resul2/100)*10;
    var totalcomisiones = comision1+comision2+comision3+resul+resul1+resul2;
    var sueldototal = totalcomisiones+resul3;

    document.formulario.sueldoI.value = "$" + sueldototal;
}

function eliminar(){
    document.formulario.sueldoI.value = "";
    document.formulario.cantidad.value = "";
}