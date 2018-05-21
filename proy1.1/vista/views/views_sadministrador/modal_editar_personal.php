<form name="crud"  method="post" action="../../../modelo/model_empleado/editar_empleado.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Editar_Empleado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Editar Datos de Emplead@</h4>
      </div>
      <div class="modal-body">

    <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
<div class="form-group col-md-12"> 
<input type="hidden" class="form-control" id="id_empleado" name="id_empleado" minlength="5" maxlength="100" onpaste="return false" required>
<input type="hidden" class="form-control" id="id_empleado" name="id_empleado" minlength="5" maxlength="100" onpaste="return false" required>
  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >CI:</label>
            <input type="number" class="form-control" id="ci" name="ci"  minlength="5" maxlength="100" onpaste="return false" disabled="" required>
  </div>

  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Nombre:</label>
            <input type="text" class="form-control" id="nombre" name="nombre"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Apellido Paterno:</label>
            <input type="text" class="form-control" id="ap_paterno" name="ap_paterno"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
      <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Apellido Materno:</label>
            <input type="text" class="form-control" id="ap_materno" name="ap_materno"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Celular de Referencia:</label>
            <input type="number" class="form-control" id="cel_referencia" name="cel_referencia"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Direccion de Referencia:</label>
            <input type="text" class="form-control" id="direc_referencia" name="direc_referencia"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Fecha de Ingreso:</label>
            <input type="date" class="form-control" id="xDate" name="fecha_ingreso"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>


 <div class="form-group col-md-12">
    <label for="select" class="control-label">Cargo:</label>
        <select class="form-control" id="id_cargo" name="id_cargo" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione un Cargo------</option>
        <?php
  
        foreach ($resultado_cargo as $key_cargo => $value_cargo) { ?>
          <option value="<?php echo $value_cargo['id_cargo'];?>"><?php echo "<b>".utf8_encode($value_cargo['des_cargo'])."</b>";}?></option>
        </select>
  </div>
        <input type="submit" value="Editar" class="btn btn-block btn-success" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</form>