<?php
require 'databaseproy.php';
$objData = new databaseProyecto();
$cargo= $objData->prepare('SELECT * FROM cargo ');
$cargo->execute();
$resultado_cargo = $cargo->fetchAll();
?>