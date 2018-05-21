<?php
require 'bd_p.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$id_cliente= $_POST['id_cliente'];
$estado= "INACTIVO" ;
$eliminar_cliente = $objData->prepare('UPDATE `cliente` SET estado =:estado  WHERE id_cliente = :id_cliente');
$eliminar_cliente->bindParam(':estado', $estado);
$eliminar_cliente->bindParam(':id_cliente', $id_cliente);
$eliminar_cliente->execute();
header('location: ../../vista/views/views_sadministrador/clientes_sadm.php');


?>