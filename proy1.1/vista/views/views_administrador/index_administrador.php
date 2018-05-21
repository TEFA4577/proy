<?php
require_once("../../default/default_administrador/main_administrador.php");
require_once("../../default/default_administrador/header_administrador.php");
?>
<script src="../../assets/js/usuario_adm_prueba.js" type="text/javascript"></script>
<?php

require_once("../../default/default_administrador/menu_administrador.php");
require_once("../../../modelo/model_adm/consultas.php"); 

?>
<br><br><br><br><br><br>


<div class="row">

<div class="col-md-8 col-md-offset-2">
    <h1>
            <button type="button" class="btn btn-success pull-right menu" data-toggle="modal" data-target="#Modal_Nuevo_Usuario"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i>&nbsp;Agregar Nuevo Usuario</button>     
                       <?php  require_once('modal_nuevo_usuario.php');
                               
                             
                       ?>      </div>
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
            <th>Acciones</th>
        </tr>
        </tfoot>
    </table>        
</div>
</div>
<script src="../../assets/js/var_mod_e_usuario.js"></script>
<?php
require_once("../../default/default_administrador/footer_administrador.php");
?>

