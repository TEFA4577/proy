<?php
require_once("../../default/default_sadministrador/main_sadministrador.php");
require_once("../../default/default_sadministrador/header_sadministrador.php");
?>
<script src="../../assets/js/laboratorio_adm.js" type="text/javascript"></script>
<?php
require_once("../../default/default_sadministrador/menu_sadministrador.php"); 
?>

<br><br><br><br>

<div class="row">

<div class="col-md-8 col-md-offset-2">
    <h1>
            <button type="button" class="btn btn-success pull-right menu" data-toggle="modal" data-target="#Modal_Nuevo_Laboratorio"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i>&nbsp;Agregar Nuevo Laboratorio</button>
            <?php  require_once('modal_nuevo_lab.php');
                             //require_once('modal_editar_usuario.php'); 
                             //require_once('modal_eliminar_usuario.php'); 
                       ?>     
                           </div>
    </h1>  
</div><br><br>
<div class="col-md-7 col-md-offset-3">    
    <table id="panel_laboratorio" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Proveedor</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        <tr>
        	<th>Proveedor</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Acciones</th>
            
        </tr>
        </tfoot>
    </table>        
</div>
</div>
<script src="../../assets/js/var_mod_e_labo.js"></script>
<?php
require_once("../../default/default_sadministrador/footer_sadministrador.php");
?>