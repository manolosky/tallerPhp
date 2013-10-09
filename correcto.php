<?php 

	$variableControl = $_COOKIE['control'];
	if($variableControl != "manuel"){
		header("Location: error.php");
	}
 ?>

<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Correcto</title>
</head>
<body>
	<h1>Felicitaciones su registro ha sido exitoso</h1>
</body>
</html>