<?php
$id_usuario= $_POST['id_usuario'];
$usuario= $_POST['usuario'];
$password= $_POST['password'];
$id_privilegio= $_POST['id_privilegio'];
$ci= $_POST['ci'];
$nombre= $_POST['nombre'];
$ap_paterno= $_POST['ap_paterno'];
$ap_materno= $_POST['ap_materno'];
require 'database_proyecto.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$editar_usuario = $objData->prepare('UPDATE usuario set usuario = :usuario, password = :password, id_privilegio = :id_privilegio WHERE id_usuario = :id_usuario');
	$editar_usuario->bindParam(':id_usuario', $id_usuario);
	$editar_usuario->bindParam(':usuario', $usuario);
	$editar_usuario->bindParam(':password', $password);
	$editar_usuario->bindParam(':id_privilegio', $id_privilegio);
	$editar_usuario->execute();
$editar_persona = $objData->prepare('UPDATE persona set nombre = :nombre, ap_paterno = :ap_paterno, ap_materno = :ap_materno WHERE ci = :ci');
	$editar_persona->bindParam(':ci', $ci);
	$editar_persona->bindParam(':nombre', $nombre);
	$editar_persona->bindParam(':ap_paterno', $ap_paterno);
	$editar_persona->bindParam(':ap_materno', $ap_materno);
	$editar_persona->execute();
header('location: ../../vista/views/views_sadministrador/index_sadministrador.php');
?>