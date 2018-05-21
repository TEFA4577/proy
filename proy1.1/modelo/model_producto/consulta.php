<?php
require 'bd_proy.php';
$objData = new databaseProyecto();
$laboratorio= $objData->prepare('SELECT * FROM laboratorio');
$laboratorio->execute();
$resultado_laboratorio = $laboratorio->fetchAll();

$objData = new databaseProyecto();
$presentacion= $objData->prepare('SELECT * FROM presentacion');
$presentacion->execute();
$resultado_presentacion = $presentacion->fetchAll();

$objData = new databaseProyecto();
$unidad= $objData->prepare('SELECT * FROM unidad');
$unidad->execute();
$resultado_unidad = $unidad->fetchAll();


$objData = new databaseProyecto();
$seccion= $objData->prepare('SELECT * FROM seccion');
$seccion->execute();
$resultado_seccion = $seccion->fetchAll();


?>