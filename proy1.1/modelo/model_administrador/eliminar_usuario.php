<?php
require 'database_proyecto.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$estado= "INACTIVO" ;
$id_usuario= $_POST['id_usuario'];
$eliminar_usuario = $objData->prepare('UPDATE `usuario` SET estado =:estado  WHERE id_usuario = :id_usuario');
$eliminar_usuario->bindParam(':estado', $estado);
$eliminar_usuario->bindParam(':id_usuario', $id_usuario);
$eliminar_usuario->execute();
header('location: ../../vista/views/views_sadministrador/index_sadministrador.php');


?>