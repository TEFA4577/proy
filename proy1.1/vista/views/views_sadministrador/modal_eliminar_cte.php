<form name="crud"  method="post" action="../../../modelo/model_cliente/eliminar_cliente.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Eliminar_Cliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Eliminar Usuario</h4>
      </div>
      <div class="modal-body">
<h3 class="text-center">Desea dar de baja al Cliente?</h3>
   <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
   <div class="form-group col-md-12">
            
            <input type="hidden" class="form-control" id="id_cliente" name="id_cliente"  minlength="5"  maxlength="100"  required>
  </div>
 <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >CI:</label>
            <input type="text" class="form-control" id="ci_nit" name="ci_nit"  minlength="5" disabled="" maxlength="100" onpaste="return false" required>
  </div>
   
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Usuario:</label>
            <input type="text" class="form-control" id="ap_paterno" name="ap_paterno" disabled=""  minlength="5" maxlength="100" onpaste="return false" required>
  </div>



        <input type="submit" value="Eliminar" class="btn btn-block btn-danger" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</form>