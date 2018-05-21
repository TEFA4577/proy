<?php
require 'bd_proy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
//consulta para insertar datos producto
$sth= $objData->prepare('INSERT INTO producto VALUES (:cod_producto, :nombre_prod,  :des_medicamento, :id_unidad, :id_presentacion, :cod_laboratorio, :costo_venta, :id_seccion) ');

$cod_producto=' ';
$nombre_prod = $_POST['nombre_prod'];
$des_medicamento = $_POST['des_medicamento'];
$id_unidad = $_POST['id_unidad'];
$id_presentacion = $_POST['id_presentacion'];
$cod_laboratorio = $_POST['cod_laboratorio'];
$costo_venta = $_POST['costo_venta'];
$id_seccion = $_POST['id_seccion'];

//usuario
$sth->bindParam(':cod_producto', $cod_producto);
$sth->bindParam(':nombre_prod', $nombre_prod);
$sth->bindParam(':des_medicamento', $des_medicamento);
$sth->bindParam(':id_unidad', $id_unidad);
$sth->bindParam(':id_presentacion', $id_presentacion);
$sth->bindParam(':cod_laboratorio', $cod_laboratorio);
$sth->bindParam(':costo_venta', $costo_venta);
$sth->bindParam(':id_seccion', $id_seccion);
$sth->execute();

header('location: ../../vista/views/views_sadministrador/productos_sadm.php');


/*$sth_usuario = $objData->prepare('INSERT INTO usuario VALUES (:id_usuario, :id_privilegio,  :ci,  :usuario,  :password) ');
$sth_usuario->bindParam(':id_usuario', $id_usuario);
$sth_usuario->bindParam(':id_privilegio', $id_privilegio);
$sth_usuario->bindParam(':ci', $ci);
$sth_usuario->bindParam(':usuario', $usuario);
$sth_usuario->bindParam(':password', $password);
$sth_usuario->execute();*/
//header('location: ../../vista/views/views_sadministrador/productos.php');
				//hallamos el ultimo registro de tabla monitor
/*
				$ult_monitor = $objData->prepare('SELECT * FROM `monitor` ORDER BY id_monitor DESC LIMIT 1');
				$ult_monitor->execute();
				$xult_monitor = $ult_monitor -> fetch();
				$x_monitor=$xult_monitor['id_monitor'];*/
?>