<?php
require 'database_proyecto.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
//consulta para insertar datos persona
$id_usuario=' ';
$usuario = $_POST['usuario'];
$password = $_POST['password'];
$ci = $_POST['ci'];
$nombre = $_POST['nombre'];
$ap_paterno = $_POST['ap_paterno'];
$ap_materno = $_POST['ap_materno'];
$id_privilegio = $_POST['id_privilegio'];
//usuario
$sth_usuario = $objData->prepare('INSERT INTO persona VALUES (:ci, :nombre,  :ap_paterno, :ap_materno) ');
$sth_usuario->bindParam(':ci', $ci);
$sth_usuario->bindParam(':nombre', $nombre);
$sth_usuario->bindParam(':ap_paterno', $ap_paterno);
$sth_usuario->bindParam(':ap_materno', $ap_materno);
$sth_usuario->execute();
//usuario
$sth_usuario = $objData->prepare('INSERT INTO usuario VALUES (:id_usuario, :id_privilegio,  :ci,  :usuario,  :password) ');
$sth_usuario->bindParam(':id_usuario', $id_usuario);
$sth_usuario->bindParam(':id_privilegio', $id_privilegio);
$sth_usuario->bindParam(':ci', $ci);
$sth_usuario->bindParam(':usuario', $usuario);
$sth_usuario->bindParam(':password', $password);
$sth_usuario->execute();
header('location: ../../vista/views/views_administrador/index_sadministrador.php');
				//hallamos el ultimo registro de tabla monitor
/*
				$ult_monitor = $objData->prepare('SELECT * FROM `monitor` ORDER BY id_monitor DESC LIMIT 1');
				$ult_monitor->execute();
				$xult_monitor = $ult_monitor -> fetch();
				$x_monitor=$xult_monitor['id_monitor'];*/
?>