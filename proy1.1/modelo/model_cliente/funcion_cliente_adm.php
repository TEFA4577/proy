<?php
require 'bd_p.php';
$objData = new databaseProyecto();
$tabla = " ";
$cliente= $objData->prepare('SELECT * FROM `cliente`');
$cliente->execute();
$resultado_cliente = $cliente->fetchAll();
foreach ($resultado_cliente as $key=> $valor_cliente) {

$editar ='<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" title=\"Editar\" data-target=\"#Modal_Editar_Cliente\" data-id_cliente=\"'.$valor_cliente['id_cliente'].'\" data-ap_paterno=\"'.$valor_cliente['ap_paterno'].'\" data-ci_nit=\"'.$valor_cliente['ci_nit'].'\"><i class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></i></button>';

$eliminar = '<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" title=\"Eliminar\" data-target=\"#Modal_Eliminar_Cliente\" data-id_cliente=\"'.$valor_cliente['id_cliente'].'\" data-ap_paterno=\"'.$valor_cliente['ap_paterno'].'\" data-ci_nit=\"'.$valor_cliente['ci_nit'].'\"><i class=\"glyphicon glyphicon-remove \" aria-hidden=\"true\"></i></button>' ; 

$activar = '<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" title=\"Activar\" data-target=\"#Modal_Activar_Cliente\" data-id_cliente=\"'.$valor_cliente['id_cliente'].'\" data-ap_paterno=\"'.$valor_cliente['ap_paterno'].'\" data-ci_nit=\"'.$valor_cliente['ci_nit'].'\"><i class=\"glyphicon glyphicon-check \" aria-hidden=\"true\"></i></button>' ; 


	$tabla.='{
          		"Numero de NIT":"'.($valor_cliente['ci_nit']).'",
				"Datos del Cliente":"'.$valor_cliente['ap_paterno'].'",
				"estado":"'.utf8_encode($valor_cliente['estado']).'",
				"acciones":"'.$editar.$eliminar.$activar.'"
			},';	
}
	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);
	echo '{"data":['.$tabla.']}';


?>