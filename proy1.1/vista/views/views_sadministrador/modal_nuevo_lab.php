<form name="crud"  method="post" action="../../../modelo/model_laboratorio/registrar_lab.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Nuevo_Laboratorio" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">

  <   <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Registrar Proveedor</h4>
      </div>
      <div class="modal-body">

   <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
 <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Nombre del Proveedor:</label>
            <input type="text" class="form-control" id="laboratorio" name="laboratorio"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
   <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Telefono del Proveedor:</label>
            <input type="text" class="form-control" id="telefono" name="telefono"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Direccion del Proveedor:</label>
            <input type="text" class="form-control" id="direccion" name="direccion"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

        <input type="submit" value="Registrar" class="btn btn-block btn-success" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</form>