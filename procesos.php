<?php
	$name=$_POST['name'];
	$clave=$_POST['clave'];

	if($clave=="manuel"){
		setcookie("control","manuel", time()+1800,"/","localhost");
		header("Location: correcto.php");
	} else {
		header("Location: error.php");
	}
?>