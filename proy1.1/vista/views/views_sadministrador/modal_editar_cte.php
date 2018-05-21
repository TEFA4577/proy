<form name="crud"  method="post" action="../../../modelo/model_cliente/editar_cliente.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Editar_Cliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Editar Datos del Cliente</h4>
      </div>
      <div class="modal-body">

      <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
 <div class="form-group col-md-12">
  <input type="hidden" class="form-control" id="ci_nit" name="ci_nit"  minlength="5" maxlength="100" onpaste="return false" required>
  <input type="hidden" class="form-control" id="id_cliente" name="id_cliente" minlength="5" maxlength="100" onpaste="return false" required>
            <label for="codigo" class="control-label" >CI:</label>
            <input type="text" class="form-control" id="ci_nit" name="ci_nit"  minlength="5" maxlength="100" onpaste="return false" disabled="" required>
  </div>
  
  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Apellido del Cliente:</label>
            <input type="text" class="form-control" id="ap_paterno" name="ap_paterno"  minlength="5" maxlength="100" onpaste="return false" required>
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