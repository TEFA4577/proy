<?php
require 'bdproy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
//consulta para insertar datos del laboratorio
$sth= $objData->prepare('INSERT INTO laboratorio VALUES (:cod_laboratorio, :laboratorio,  :telefono, :direccion) ');

$cod_laboratorio='';
$laboratorio = $_POST['laboratorio'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
//usuario
$sth->bindParam(':cod_laboratorio', $cod_laboratorio);
$sth->bindParam(':laboratorio', $laboratorio);
$sth->bindParam(':telefono', $telefono);
$sth->bindParam(':direccion', $direccion);
$sth->execute();

header('location: ../../vista/views/views_sadministrador/laboratorio_sadm.php');