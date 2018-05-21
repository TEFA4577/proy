<?php
require 'bd_proy.php';
$objData = new databaseProyecto();
$tabla = " ";
$producto= $objData->prepare('SELECT * FROM `producto` INNER JOIN presentacion ON producto.id_presentacion = presentacion.id_presentacion INNER JOIN laboratorio ON laboratorio.cod_laboratorio = producto.cod_laboratorio INNER JOIN unidad ON unidad.id_unidad = producto.id_unidad INNER JOIN seccion ON seccion.id_seccion = producto.id_seccion');
$producto->execute();
$resultado_producto = $producto->fetchAll();
foreach ($resultado_producto as $key=> $valor_producto) {

 $editar ='<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" title=\"Editar\" data-target=\"#Modal_Editar_Usuario\" data-cod_producto=\"'.$valor_producto['cod_producto'].'\" data-nombre=\"'.$valor_producto['nombre_prod'].'\" data-des_medicamento=\"'.$valor_producto['des_medicamento'].'\" data-id_unidad=\"'.$valor_producto['id_unidad'].'\" data-id_presentacion=\"'.$valor_producto['id_presentacion'].'\" data-cod_laboratorio=\"'.$valor_producto['cod_laboratorio'].'\" data-costo_venta=\"'.$valor_producto['costo_venta'].'\" data-id_seccion=\"'.$valor_producto['id_seccion'].'\"><i class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></i></button>';

 $eliminar = '<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" title=\"Eliminar\" data-target=\"#Modal_Eliminar_Producto\" data-cod_producto=\"'.$valor_producto['cod_producto'].'\" data-nombre=\"'.$valor_producto['nombre_prod'].'\"><i class=\"glyphicon glyphicon-remove \" aria-hidden=\"true\"></i></button>' ; 

	$tabla.='{
          		"Nombre":"'.$valor_producto['nombre_prod'].'",
				"Descripcion":"'.$valor_producto['des_medicamento'].'",
				"Presentacion":"'.utf8_decode($valor_producto['des_presentacion']).'",
				"Laboratorio":"'.utf8_decode($valor_producto['laboratorio']).'",
				"unidad":"'.utf8_decode($valor_producto['cantidad_unidad']).'",
				"costo":"'.$valor_producto['costo_venta'].'",
				"Seccion":"'.$valor_producto['des_seccion'].'",
				"acciones":"'.$editar.$eliminar.'"
			},';	
}
	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);
	echo '{"data":['.$tabla.']}';


?>

