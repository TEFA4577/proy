<?php
require 'databaseproy.php';
$objData = new databaseProyecto();
$tabla = " ";
$empleado= $objData->prepare('SELECT * FROM `empleado` INNER JOIN persona ON empleado.ci = persona.ci INNER JOIN cargo ON cargo.id_cargo = empleado.id_cargo ');
$empleado->execute();
$resultado_empleado = $empleado->fetchAll();
foreach ($resultado_empleado as $key => $valor_empleado) {

 $editar = '<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" title=\"Editar\" data-target=\"#Modal_Editar_Empleado\" data-id_empleado=\"'.$valor_empleado['id_empleado'].'\" data-ci=\"'.$valor_empleado['ci'].'\" data-nombre=\"'.$valor_empleado['nombre'].'\" data-ap_paterno=\"'.$valor_empleado['ap_paterno'].'\" data-cel_referencia=\"'.$valor_empleado['cel_referencia'].'\" data-direc_referencia=\"'.$valor_empleado['direc_referencia'].'\" data-fecha_ingreso=\"'.$valor_empleado['fecha_ingreso'].'\" data-id_cargo=\"'.$valor_empleado['id_cargo'].'\"><i class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></i></button>' ;

$eliminar = '<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" title=\"Eliminar\" data-target=\"#Modal_Eliminar_Empleado\" data-id_empleado=\"'.$valor_empleado['id_empleado'].'\" data-nombre=\"'.$valor_empleado['nombre'].'\" data-ap_paterno=\"'.$valor_empleado['ap_paterno'].'\" data-ap_materno=\"'.$valor_empleado['ap_materno'].'\" data-ci=\"'.$valor_empleado['ci'].'\"><i class=\"glyphicon glyphicon-remove \" aria-hidden=\"true\"></i></button>' ; 

$activar = '<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" title=\"Eliminar\" data-target=\"#Modal_Activar_Empleado\" data-id_empleado=\"'.$valor_empleado['id_empleado'].'\" data-nombre=\"'.$valor_empleado['nombre'].'\" data-ap_paterno=\"'.$valor_empleado['ap_paterno'].'\" data-ap_materno=\"'.$valor_empleado['ap_materno'].'\" data-ci=\"'.$valor_empleado['ci'].'\"><i class=\"glyphicon glyphicon-check \" aria-hidden=\"true\"></i></button>' ; 

	$tabla.='{
          "ci":"'.($valor_empleado['ci']).'",
				  "datos":"'.utf8_encode($valor_empleado['nombre']." ".$valor_empleado['ap_paterno']." ".$valor_empleado['ap_materno']).'",
				  "referencia":"'.utf8_encode($valor_empleado['cel_referencia']." ".$valor_empleado['direc_referencia']).'",
				  "ingreso":"'.utf8_encode($valor_empleado['fecha_ingreso']).'",
				  "cargo":"'.utf8_encode($valor_empleado['des_cargo']).'",
				  "estado":"'.utf8_encode($valor_empleado['estado']).'",
				  "acciones":"'.$editar.$eliminar.$activar.'"
			},';	
}
	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);
	echo '{"data":['.$tabla.']}';	


?>