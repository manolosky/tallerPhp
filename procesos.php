<?php

	//Preguntar por la datos recogidos por POST y redireccionar a uno de los dos archivos
	
	$name=$_POST['name'];
	$clave=$_POST['clave'];

	// Controlar la clave, comparandola con un string y revisar si esta guardada en la respectiva cookie y si la clave es correcta guardarka en un cookie llamada manuel************
	// if($clave=="manuel"){
	// 	setcookie("control","manuel", time()+1800,"/","localhost");
	// 	header("Location: correcto.php");
	// } else {
	// 	header("Location: error.php");
	// }

	//Conexion SQL al servidor, Especificar servidor, usuario, y password

	$conexion = mysql_connect("localhost","root","");
	if (!$conexion) {
		die('Could no connect: '.mysql_error());
	}

	//Conectar a la BD que queremos

	mysql_select_db('prueba', $conexion);

	//Guardar sentencia SQL en una variable, esto hace mas facil la comprension del código

	//$sql = "select * from usuarios"; //Traer todos los datos de la tabla usuarios*********************************

	$sql = "select password from usuarios where nombre = '$name'";
	
	$registros = mysql_query($sql, $conexion);

	//Crear un array: una variable con varios valores para almacenar todos los valores que existan

	while ($fila = mysql_fetch_array($registros)) {
		$passwords = $fila["password"]; //Recoger datos del campo "password" en esta variable
		$nombres = $fila["nombre"]; // Recoger datos del campo "nombre" en esta variable

		if ($clave == $passwords) {
			setcookie("control",$clave, time()+1800,"/","localhost");
			header("Location: correcto.php");
		} else {
			header("Location: error.php");
		}

		// echo $nombres." - ".$passwords; //Mostrar los datos de la base de datos recogidos en las variables passwords y nombres
		// echo "<br/><br/>";
	}
?>