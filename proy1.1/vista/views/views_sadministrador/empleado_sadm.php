<?php
require_once("../../default/default_sadministrador/main_sadministrador.php");
require_once("../../default/default_sadministrador/header_sadministrador.php");
?>
<script src="../../assets/js/empleado_prueba.js" type="text/javascript"></script>
<?php
require_once("../../default/default_sadministrador/menu_sadministrador.php"); 
require_once("../../../modelo/model_empleado/consultas.php");
?>

<br><br><br><br><br>

<div class="row">

<div class="col-md-8 col-md-offset-3">
    <h1>
            <button type="button" class="btn btn-success pull-right menu" data-toggle="modal" data-target="#Modal_Nuevo_Personal"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i>&nbsp;Agregar Nuevo Cliente</button>
                 <?php require_once('modal_nuevo_personal.php');
                       require_once('modal_editar_personal.php'); 
                       require_once('modal_eliminar_emp.php'); 
                        //require_once('modal_activar_personal.php'); 

                    ?>     
                           </div>
    </h1>  
</div><br><br><br>

<div class="col-md-10 col-md-offset-1">    
    <table id="panel_personal" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Nro. CI/NIT</th>
            <th>Datos del Empleado</th>
            <th>Celular/Direccion del Empleado</th>
            <th>Fecha de Ingreso</th>
            <th>Cargo</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        <tr>
        	<th>Nro. CI/NIT</th>
            <th>Datos del Empleado</th>
            <th>Celular/Direccion del Empleado</th>
            <th>Fecha de Ingreso</th>
            <th>Cargo</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        </tfoot>
    </table>        
</div>
</div>
<script src="../../assets/js/var_mod_e_emp.js"></script>
<?php
require_once("../../default/default_sadministrador/footer_sadministrador.php");
?>
