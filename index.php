<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Ciudades del Mundo</title>
		<link rel="stylesheet" type"text/css" href="estilo.css">
		<link rel="stylesheet" type"text/css" href="boot/css/bootstrap.css">
	</head>
	<body>
	<div class="contenedor-form">
			<form action="" id = "formlg">
				<center>
					<h1>Ciudades del mundo</h1>
				</center>
				<br>
			<input type="text" name="ciudad" class="ciudad" id="ciudad" pattern ="[A-Za-z0-9_-]{1,15}" placeholder= "Ciudad"  />
			<br>
			<br>
			<h3>Ciudades encontrada</h3>
			<br>
			<div class="ciudades" id="ciudades">

			</div>
		</form>
		</div>

	<!--archivos-->
	<script src ="js/jquery-3.3.1.min.js"></script>
	<script src ="js/main.js"></script>
	</body>
</html>
