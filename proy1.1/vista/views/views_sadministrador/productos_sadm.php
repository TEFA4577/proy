<?php
require_once("../../default/default_sadministrador/main_sadministrador.php");
require_once("../../default/default_sadministrador/header_sadministrador.php");
?>
<script src="../../assets/js/producto_adm_prueba.js" type="text/javascript"></script>
<?php
require_once("../../default/default_sadministrador/menu_sadministrador.php");
require_once("../../../modelo/model_producto/consulta.php"); 
?>

<br><br><br><br>

<div class="row">

<div class="col-md-7 col-md-offset-4">
    <h1>
            <button type="button" class="btn btn-success pull-right menu" data-toggle="modal" data-target="#Modal_Nuevo_Producto"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i>&nbsp;Agregar Nuevo Producto</button> 

					<?php  require_once('modal_nuevo_prod.php');
                             //require_once('modal_editar_usuario.php'); 
                             //require_once('modal_eliminar_usuario.php'); 
                    ?>    </div>
    </h1>  

</div><br>
<div class="col-md-10 col-md-offset-1">    
    <table id="panel_producto" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Presentacion</th>
            <th>Laboratorio</th>
            <th>Unidad</th>
            <th>Costo</th>
            <th>Seccion</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Presentacion</th>
            <th>Laboratorio</th>
            <th>Unidad</th>
            <th>Costo</th>
            <th>Seccion</th>
            <th>Acciones</th>
        </tr>
        </tfoot>
    </table>        
</div>
</div>
<script src="../../assets/js/var_mod_e_producto.js"></script>
<?php
require_once("../../default/default_sadministrador/footer_sadministrador.php");
?>