<?php
require 'databaseproy.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$id_empleado= $_POST['id_empleado'];
$estado= "INACTIVO" ;
$eliminar_empleado = $objData->prepare('UPDATE `empleado` SET estado =:estado  WHERE id_empleado = :id_empleado');
$eliminar_empleado->bindParam(':estado', $estado);
$eliminar_empleado->bindParam(':id_empleado', $id_empleado);
$eliminar_empleado->execute();
header('location: ../../vista/views/views_sadministrador/empleado_sadm.php');


?>