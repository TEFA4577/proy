<?php
require 'databaseproy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
//consulta para insertar datos persona
$id_empleado='';
$ci = $_POST['ci'];
$id_cargo = $_POST['id_cargo'];
$cel_referencia= $_POST['cel_referencia'];
$direc_referencia = $_POST['direc_referencia'];
$fecha_ingreso = $_POST['fecha_ingreso'];
$nombre = $_POST['nombre'];
$ap_materno = $_POST['ap_materno'];
$ap_paterno = $_POST['ap_paterno'];
$estado= "ACTIVO" ;
//empleado
$sth_emp= $objData->prepare('INSERT INTO persona VALUES (:ci, :nombre,  :ap_paterno, :ap_materno) ');
$sth_emp->bindParam(':ci', $ci);
$sth_emp->bindParam(':nombre', $nombre);
$sth_emp->bindParam(':ap_paterno', $ap_paterno);
$sth_emp->bindParam(':ap_materno', $ap_materno);
$sth_emp->execute();
//empleado
$sth_emp = $objData->prepare('INSERT INTO empleado VALUES (:id_empleado, :ci,  :id_cargo,  :cel_referencia,  :direc_referencia, :fecha_ingreso, :estado) ');
$sth_emp->bindParam(':id_empleado', $id_empleado);
$sth_emp->bindParam(':ci', $ci);
$sth_emp->bindParam(':id_cargo', $id_cargo);
$sth_emp->bindParam(':cel_referencia', $cel_referencia);
$sth_emp->bindParam(':direc_referencia', $direc_referencia);
$sth_emp->bindParam(':fecha_ingreso', $fecha_ingreso);
$sth_emp->bindParam(':estado', $estado);
$sth_emp->execute();
header('location: ../../vista/views/views_sadministrador/empleado_sadm.php');
?>