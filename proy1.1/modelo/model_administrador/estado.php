<?php
require 'database_proyecto.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$estado= "ACTIVO" ;
$id_usuario= $_POST['id_usuario'];
$activar_usuario = $objData->prepare('UPDATE `usuario` SET estado =:estado  WHERE id_usuario = :id_usuario');
$activar_usuario->bindParam(':estado', $estado);
$activar_usuario->bindParam(':id_usuario', $id_usuario);
$activar_usuario->execute();
header('location: ../../vista/views/views_sadministrador/index_sadministrador.php');


?>