<?php
require_once("../../default/default_sadministrador/main_sadministrador.php");
require_once("../../default/default_sadministrador/header_sadministrador.php");
?>
<script src="../../assets/js/usuario_adm_prueba.js" type="text/javascript"></script>
<?php

require_once("../../default/default_sadministrador/menu_sadministrador.php");
require_once("../../../modelo/model_administrador/consultas.php"); 
?>

<br><br>


<div class="col-md-8 col-md-offset-2">
    <h1 class="page-header">
                            Bienvenid@ <small>Administrador</small>
                        </h1>

    <h1>
            <button type="button" class="btn btn-success pull-right menu" data-toggle="modal" data-target="#Modal_Nuevo_Usuario"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i>&nbsp;Agregar Nuevo Usuario</button> 
                     <?php   require_once('modal_nuevo_usuario.php');
                             require_once('modal_editar_usuario.php'); 
                             require_once('modal_eliminar_usuario.php');
                             require_once('modal_activar_usuario.php');  
                       ?>     </div>
</h1>  
</div><br><br>
     </h1>  
</div><br><br>

<div class="col-md-8 col-md-offset-2">    
    <table id="panel_usuario_prueba" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>CI</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Privilegio</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        <tr>
            <th>CI</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Privilegio</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        </tfoot>
    </table>        
</div>
</div>
<script src="../../assets/js/var_mod_e_usuario.js"></script>
<?php
require_once("../../default/default_sadministrador/footer_sadministrador.php");
?>

