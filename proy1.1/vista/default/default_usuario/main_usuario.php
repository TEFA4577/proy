<?php
require'../../../modelo/sessions.php';
$objses = new Sessions();
$objses->init();
if(isset($_SESSION['usuario'])){
    $nameU = $objses->get('usuario');
    $id_usuario = $objses->get('id_usuario');
    $id_privilegio = $objses->get('id_privilegio');
    $id_funcionario = $objses->get('id_funcionario');
    $estado = $objses->get('estado');
    $des_departamento = $objses->get('des_departamento');
    $id_departamento = $objses->get('id_departamento');
    $id_jurisdiccion = $objses->get('id_jurisdiccion');
     $nombres_funcionario = $objses->get('nombres_funcionario');
    $paterno_funcionario = $objses->get('paterno_funcionario');
    $materno_funcionario = $objses->get('materno_funcionario');
    //Controlar el Perfil del acceso
    if($id_privilegio != 3 || $estado != 1){
        $objses->destroy();
        header('Location: ../../../error.php');
                            }
}else{
    $user = isset($nameU) ? $nameU : null ;
    if($user == ''){
            header('Location: ../../../error.php');
    }
}
?>