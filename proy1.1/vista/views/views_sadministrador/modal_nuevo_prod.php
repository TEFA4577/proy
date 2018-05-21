<form name="crud"  method="post" action="../../../modelo/model_producto/registrar_producto.php" id="nueva_unidad">
<div class="modal fade" id="Modal_Nuevo_Producto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">Registrar Medicamento</h4>
      </div>
      <div class="modal-body">

 <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Nombre del Producto:</label>
            <input type="text" class="form-control" id="nombre_prod" name="nombre_prod"  minlength="5" maxlength="100" onpaste="return false" required>
  </div>
     <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Descripcion:</label>
            <input type="text" class="form-control" id="des_medicamento" name="des_medicamento"  minlength="5" maxlength="100" onpaste="return false" required>
   </div>
    
 <div class="form-group col-md-12">
    <label for="select" class="control-label">Presentacion:</label>
        <select class="form-control" id="id_presentacion" name="id_presentacion" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione una presentacion------</option>
        <?php
  
        foreach ($resultado_presentacion as $key_presentacion => $value_presentacion) { ?>
          <option value="<?php echo $value_presentacion['id_presentacion'];?>"><?php echo "<b>".utf8_encode($value_presentacion['des_presentacion'])."</b>";}?></option>
        </select>
  </div>

<div class="form-group col-md-12">
    <label for="select" class="control-label">Laboratorio:</label>
        <select class="form-control" id="cod_laboratorio" name="cod_laboratorio" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione un Proveedor------</option>
        <?php
  
        foreach ($resultado_laboratorio as $key_laboratorio => $value_laboratorio) { ?>
          <option value="<?php echo $value_laboratorio['cod_laboratorio'];?>"><?php echo "<b>".utf8_encode($value_laboratorio['laboratorio'])."</b>";}?></option>
        </select>
  </div>

<div class="form-group col-md-12">
    <label for="select" class="control-label">Unidad:</label>
        <select class="form-control" id="id_unidad" name="id_unidad" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione una unidad------</option>
        <?php
  
        foreach ($resultado_unidad as $key_unidad => $value_unidad) { ?>
          <option value="<?php echo $value_unidad['id_unidad'];?>"><?php echo "<b>".utf8_encode($value_unidad['cantidad_unidad'])."</b>";}?></option>
        </select>
  </div>


<div class="form-group col-md-12">
    <label for="select" class="control-label">Seccion:</label>
        <select class="form-control" id="id_seccion" name="id_seccion" onKeyPress="return dependencia(event);" required/>
        <option value="">-----Seleccione una Seccion------</option>
        <?php
  
        foreach ($resultado_seccion as $key_seccion => $value_seccion) { ?>
          <option value="<?php echo $value_seccion['id_seccion'];?>"><?php echo "<b>".utf8_encode($value_seccion['des_seccion'])."</b>";}?></option>
        </select>
  </div>

  <div class="form-group col-md-12">
            <label for="codigo" class="control-label" >Costo:</label>
            <input type="text" class="form-control" id="costo_venta" name="costo_venta"  minlength="5" maxlength="100" onpaste="return false" required>
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