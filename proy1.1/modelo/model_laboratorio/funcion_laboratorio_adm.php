<?php
require 'bdproy.php';
$objData = new databaseProyecto();
$tabla = " ";
$laboratorio= $objData->prepare('SELECT * FROM `laboratorio`');
$laboratorio->execute();
$resultado_laboratorio = $laboratorio->fetchAll();
foreach ($resultado_laboratorio as $key=> $valor_laboratorio) {

 $editar ='<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" title=\"Editar\" data-target=\"#Modal_Editar_Laboratorio\" data-cod_laboratorio=\"'.$valor_laboratorio['cod_laboratorio'].'\" data-laboratorio=\"'.$valor_laboratorio['laboratorio'].'\" data-telefono=\"'.$valor_laboratorio['telefono'].'\" data-direccion=\"'.$valor_laboratorio['direccion'].'\"><i class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></i></button>';

 $eliminar = '<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" title=\"Eliminar\" data-target=\"#Modal_Eliminar_Laboratorio\" data-cod_laboratorio=\"'.$valor_laboratorio['cod_laboratorio'].'\" data-telefono=\"'.$valor_laboratorio['telefono'].'\" data-direccion=\"'.$valor_laboratorio['direccion'].'\"><i class=\"glyphicon glyphicon-remove \" aria-hidden=\"true\"></i></button>' ; 

	$tabla.='{
          		"Proveedor":"'.$valor_laboratorio['laboratorio'].'",
				"Telefono":"'.$valor_laboratorio['telefono'].'",
				"Direccion":"'.$valor_laboratorio['direccion'].'",
				"acciones":"'.$editar.$eliminar.'"
			},';	
}
	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);
	echo '{"data":['.$tabla.']}';


?>

