<?php
require 'database_proyecto.php';
$objData = new databaseProyecto();
$tabla = " ";
$usuario= $objData->prepare('SELECT * FROM `usuario` INNER JOIN persona ON usuario.ci = persona.ci INNER JOIN privilegio ON privilegio.id_privilegio = usuario.id_privilegio ');
$usuario->execute();
$resultado_usuario = $usuario->fetchAll();
foreach ($resultado_usuario as $key => $valor_usuario) {

 $editar = '<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" title=\"Editar\" data-target=\"#Modal_Editar_Usuario\" data-id_usuario=\"'.$valor_usuario['id_usuario'].'\" data-usuario=\"'.$valor_usuario['usuario'].'\" data-password=\"'.$valor_usuario['password'].'\" data-ci=\"'.$valor_usuario['ci'].'\" data-id_privilegio=\"'.$valor_usuario['id_privilegio'].'\" data-nombre=\"'.$valor_usuario['nombre'].'\" data-ap_paterno=\"'.$valor_usuario['ap_paterno'].'\" data-ap_materno=\"'.$valor_usuario['ap_materno'].'\"><i class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></i></button>' ; 
 
 
 $eliminar = '<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" title=\"Baja\" data-target=\"#Modal_Eliminar_Usuario\" data-id_usuario=\"'.$valor_usuario['id_usuario'].'\" data-usuario=\"'.$valor_usuario['usuario'].'\" data-ci=\"'.$valor_usuario['ci'].'\"><i class=\"glyphicon glyphicon-remove \" aria-hidden=\"true\"></i></button>' ; 

 $activar = '<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" title=\"Activar\" data-target=\"#Modal_Activar_Usuario\" data-id_usuario=\"'.$valor_usuario['id_usuario'].'\" data-usuario=\"'.$valor_usuario['usuario'].'\" data-ci=\"'.$valor_usuario['ci'].'\"><i class=\"glyphicon glyphicon-check \" aria-hidden=\"true\"></i></button>' ; 


	$tabla.='{
          "ci":"'.($valor_usuario['ci']).'",
				  "datos":"'.utf8_encode($valor_usuario['nombre']." ".$valor_usuario['ap_paterno']." ".$valor_usuario['ap_materno']).'",
				  "usuario":"'.$valor_usuario['usuario'].'",
				  "privilegio":"'.utf8_encode($valor_usuario['des_privilegio']).'",
				  "estado":"'.utf8_encode($valor_usuario['estado']).'",
				  "acciones":"'.$editar.$eliminar.$activar.'"
			},';	
}
	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);
	echo '{"data":['.$tabla.']}';	


?>

