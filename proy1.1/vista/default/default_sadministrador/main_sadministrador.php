<?php

//Controlando el inicio de la sesión
require'../../../modelo/sessions.php';
$objses = new Sessions();
$objses->init();

if(isset($_SESSION['usuario'])){
    $nameU = $objses->get('usuario');
    $iduse = $objses->get('id_usuario');
    $idPro = $objses->get('id_privilegio');

    //controlar el perfil de acceso
    
    if($idPro != 1){
        $objses->destroy();
        header('Location: http://localhost:8888/usersMod/index.php?error=3');
    }

}else{
    $user = isset($_SESSION[$nameU]) ? $_SESSION[$nameU] : null ;

    if($user == ''){
        header('Location: http://localhost:8888/usersMod/index.php?error=2');
    }
}

?>
