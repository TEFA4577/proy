<?php
$cod_producto= $_POST['cod_producto'];
$nombre= $_POST['nombre'];
$des_medicamento= $_POST['des_medicamento'];
$unidad= $_POST['unidad'];
$id_presentacion= $_POST['id_presentacion'];
$cod_laboratorio= $_POST['cod_laboratorio'];
$id_seccion= $_POST['id_seccion'];
$costo_venta= $_POST['costo_venta'];
require 'bd_proy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$editar_producto = $objData->prepare('UPDATE producto set nombre = :nombre, des_medicamento = :des_medicamento, id_privilegio = :id_privilegio WHERE id_usuario = :id_usuario');
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
//header('location: ../../vista/views/views_sadministrador/index_sadministrador.php');
?>