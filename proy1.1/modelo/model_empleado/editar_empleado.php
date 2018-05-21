<?php
$id_empleado= $_POST['id_empleado'];
$ci= $_POST['ci'];
$id_cargo= $_POST['id_cargo'];
$cel_referencia= $_POST['cel_referencia'];
$direc_referencia= $_POST['direc_referencia'];
$fecha_ingreso= $_POST['fecha_ingreso'];
$nombre= $_POST['nombre'];
$ap_paterno= $_POST['ap_paterno'];
$ap_materno= $_POST['ap_materno'];
require 'databaseproy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$editar_emp= $objData->prepare('UPDATE empleado set id_cargo = :id_cargo, cel_referencia = :cel_referencia, direc_referencia = :direc_referencia, fecha_ingreso = :fecha_ingreso WHERE id_empleado = :id_empleado');
	$editar_emp->bindParam(':id_empleado', $id_empleado);
	$editar_emp->bindParam(':id_cargo', $id_cargo);
	$editar_emp->bindParam(':cel_referencia', $cel_referencia);
	$editar_emp->bindParam(':direc_referencia', $direc_referencia);
	$editar_emp->bindParam(':fecha_ingreso', $fecha_ingreso);
	$editar_emp->execute();
$editar_persona = $objData->prepare('UPDATE persona set nombre = :nombre, ap_paterno = :ap_paterno, ap_materno = :ap_materno WHERE ci = :ci');
	$editar_persona->bindParam(':ci', $ci);
	$editar_persona->bindParam(':nombre', $nombre);
	$editar_persona->bindParam(':ap_paterno', $ap_paterno);
	$editar_persona->bindParam(':ap_materno', $ap_materno);
	$editar_persona->execute();
header('location: ../../vista/views/views_sadministrador/empleado_sadm.php');
?>