//Bucle For JavaScript********************************

for(x=0; x<10; x++){
	//desarrollo o cuerpo del bucle
};

//otro ejemplo de bucle que se imcrementa en un nuemero de pasos diferente a uno

for(x=0; x<10; x+=4){
	//desarrollo o cuerpo del bucle
};

//x se toma como una variable normal, que puede ser invocada posteriormente.

//Bucle For While*************************************

var x=1; // a diferencia del for la variable se declara fuera

while(x<=10){
	//cuerpo del bucle, o sentencia a repetir;
	x++; // a diferencia del for el incremento se declara dentro del bucle
}

//Bucle do While**************************************

var x = 4; //declarar variable por fuera del bucle

do {
	//El bucle do while, primero ejecuta el codigo y luego pregunta o hace la comprobación;
	x++;
} while (x<=10);

//El bucle do while ejecuta almenos una vez el codigo asi no se cumpla la condicion, ya que la evaluacion se hace al final;

//EVENTOS: Ejecutar acciones al realizar una accion.

//PROGRAMACIÓN ORIENTADA A OBEJO***********************

//los objetos tienen propiedades o atributos y methodos.

//Crear un metodo propio*********


//Funcion constructora del objeto

function persona (nombre, edad) {
	this.nombre = nombre; //tener acceso al parametro nombre de la funcion;	
	this.edad = edad; //tener acceso al parametro edad que recibe la funcion;
};

//Crear un obejto, o una nueva instacia de objeto.

var manuel = new persona("Manuel", 23);
var juan = new persona("Juan", 35);

//AÑADIR METODO A OBJETO PROPIO***********************

function persona (nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
	this.anoNacimiento = nacimiento;
}

//Metodo en forma de funcion

function nacimiento () {
	var anos = 2012 - this.edad;
	return anos;
}

var maria = new persona("Maria", 27);

//Escribir el el documento

document.write(maria.nombre + "Tiene " + maria.edad + "nacio en " + maria.anoNacimiento());

//INICIALIZADORES DE OBJETOS***************************
//Otra forma de crear los objetos e inicializarlos, pero se usa sólo para codigos cortos ya que no se puede reutilizar mucho el codigo

//Crear objeto

manuel = {
	//todas las propiedades del objeto
	nombre:"marcos",
	edad:21,
	altura:1.80
}

jennifer = {
	nombre:"Elena",
	edad:39,
	altura: 1.72
}

//Imprimir o mostrar propiedades de los objetos

document.write(manuel.edad + jennifer.nombre); 

//JUGANDO CON EL TIEMPO / OBJETO DATE***************************

var tiempo = new Date(); //Recoger la fecha e informacion de más 
var ano = tiempo.getFullYear(); //sacar solo el año
var hora = tiempo.getHours(); //sacar solo la hora

//Imprimir la informacion

document.write("El año es "+ano+" La Hora es: "+hora)

var fecha = new Date();
fecha.setFullYear(1990);//Cambiar la fecha, de esta forma enviamos una fecha especificada
fecha.setDate(25);//Numero del día del mes

//CONSTRUIR RELOJ DIGITAL*****************************

function reloj () {
	var fecha = new Date(); //traer infor fecha
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();
	var intervalos = setTimeout("reloj()", 500)
	document.getElementById('print').innerHTML = hora + ": " + min + ": " seg;
}

//Imprimir Metodo
//llamar la funcion mediante un evento onLoad o OnClick etc....

<div id="print"></div>

//ARREGLES, ARAYS, CONJUNTOS O AGRUPACIONES *************

var coches = new Array("ford", "Mercedes", "Audi", "BMW"); //Definir y/o declarar un arreglo

document.write(coches[0]);//Mostrara Ford, los numeros o posicion se conocen como index
document.write(coches[2]);//Imprime Audi
document.write(coches[6]);//UNDEFIND



























