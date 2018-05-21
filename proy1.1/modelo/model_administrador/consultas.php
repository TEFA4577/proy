<?php
require 'database_proyecto.php';
$objData = new databaseProyecto();
$privilegio= $objData->prepare('SELECT * FROM privilegio ');
$privilegio->execute();
$resultado_privilegio = $privilegio->fetchAll();
?>