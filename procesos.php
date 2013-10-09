<?php
	/**
	$name=$_POST['name'];
	$clave=$_POST['clave'];

	if($clave=="manuel"){
		setcookie("control","manuel", time()+1800,"/","localhost");
		header("Location: correcto.php");
	} else {
		header("Location: error.php");
	}
	*/

	//Conexion SQL al servidor, Especificar servidor, usuario, y password

	$conexion = mysql_connect("localhost","root","");
	if (!$conexion) {
		die('Could no connect: '.mysql_error());
	}

	//Conectar a la BD que queremos

	mysql_select_db('prueba', $conexion);

	//Guardar sentencia SQL en una variable, esto hace mas facil la comprension del código

	$sql = "select * from = usuarios";
	$registros = mysql_query($sql, $conexion);

	while () {
		# code...
	}

?>