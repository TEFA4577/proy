<form name="crud"  method="post" action="../../../modelo/model_adm/registrar_usuario.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Nuevo_Usuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Registrar Usuario</h4>
      </div>
      <div class="modal-body">

   <label for="codigo" class="control-label" ></label>
   <div id="resultado_unidad" class="col-md-6"></div><br>
 <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >CI:</label>
            <input type="text" class="form-control" id="ci" name="ci"  minlength="5" maxlength="100" onpaste="return false" required>
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
            <label for="codigo" class="control-label" >Usuario:</label>
            <input type="text" class="form-control" id="usuario" name="usuario"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Password:</label>
            <input type="text" class="form-control" id="password" name="password"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>

 <div class="form-group col-md-12">
    <label for="select" class="control-label">Privilegio:</label>
        <select class="form-control" id="id_privilegio" name="id_privilegio" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione un privilegio------</option>
        <?php
  
        foreach ($resultado_privilegio as $key_privilegio => $value_privilegio) { ?>
          <option value="<?php echo $value_privilegio['id_privilegio'];?>"><?php echo "<b>".utf8_encode($value_privilegio['des_privilegio'])."</b>";}?></option>
        </select>
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
    

  