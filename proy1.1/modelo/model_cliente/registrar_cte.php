<?php
require 'bd_p.php';
$objData = new databaseProyecto();
$objData->exec("set names utf8");

$id_cliente='';
$ap_paterno = $_POST['ap_paterno'];
$ci_nit= $_POST['ci_nit'];
$estado= "activo" ;
//consulta para insertar datos del cliente
$sth= $objData->prepare('INSERT INTO cliente VALUES (:id_cliente, :ap_paterno,  :ci_nit, :estado) ');

//usuario
$sth->bindParam(':id_cliente', $id_cliente);
$sth->bindParam(':ap_paterno', $ap_paterno);
$sth->bindParam(':ci_nit', $ci_nit);
$sth->bindParam(':estado', $estado);
$sth->execute();
header('location: ../../vista/views/views_sadministrador/clientes_sadm.php');
?>