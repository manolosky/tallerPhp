<?php 
	if(isset($_COOKIE['control'])){
		$variableControl = $_COOKIE['control'];
		if($variableControl == "manuel"){
			header("Location: correcto.php");
		}
	}
 ?>
<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Ingresar</title>
</head>
<body>
	<h1>Formularío de Logueo</h1>
	<form action="procesos.php" method="post">
		<h2>User</h2>
		<input type="text" name="name" placeholder="Ingrese el usuario">
		<h2>Contraseña</h2>
		<input type="password" name="clave" placeholder="Ingrese la contraseña">
		<br><br>
		<input type="submit" value="Enviar Datos">
	</form>
</body>
</html>