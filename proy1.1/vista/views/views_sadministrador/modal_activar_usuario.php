<form name="crud"  method="post" action="../../../modelo/model_administrador/estado.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Activar_Usuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Activación del Usuario</h4>
      </div>
      <div class="modal-body">
<h3 class="text-center">Desea activar a este Usuario?</h3>
   <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
   <div class="form-group col-md-12">
            
            <input type="hidden" class="form-control" id="id_usuario" name="id_usuario"  minlength="5"  maxlength="100"  required>
  </div>
 <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >CI:</label>
            <input type="text" class="form-control" id="ci" name="ci"  minlength="5" disabled="" maxlength="100" onpaste="return false" required>
  </div>
   
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Datos del Cliente:</label>
            <input type="text" class="form-control" id="usuario" name="usuario" disabled=""  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

        <input type="submit" value="Activar" class="btn btn-block btn-success" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</form>