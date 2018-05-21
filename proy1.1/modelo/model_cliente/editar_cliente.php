<?php
$id_cliente= $_POST['id_cliente'];
$ap_paterno= $_POST['ap_paterno'];
$ci_nit= $_POST['ci_nit'];
require 'bd_p.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");
$editar_cliente = $objData->prepare('UPDATE cliente set ap_paterno = :ap_paterno WHERE id_cliente = :id_cliente');
    $editar_cliente->bindParam(':id_cliente', $id_cliente);
	$editar_cliente->bindParam(':ap_paterno', $ap_paterno);
	$editar_cliente->execute();
header('location: ../../vista/views/views_sadministrador/clientes_sadm.php');
?>