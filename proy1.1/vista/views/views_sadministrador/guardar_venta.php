<?php
    $conexion = mysqli_connect("localhost","root","","fp");
    $acentos = $conexion->query("SET NAMES 'utf8'");

  
    //Se trabaja con el id del un empleado por defecto para efectos de prueba
    $id_empleado = 1;

    //Se extrae el id mayor de la tabla venta
    $query_id_venta="SELECT max(id_venta) from venta";
    $consulta = mysqli_query($conexion,$query_id_venta);
    $fila = mysqli_fetch_row($consulta);
    $id_venta = trim($fila[0]);
    if ($id_venta==null) {
        $id_venta = 1;
    }
    else {
        $id_venta = $id_venta + 1;
    }
    //Fin de extraer el id mayor de la tabla venta

    //Se inserta la nueva venta, una venta por empleado, este id_venta se usa en la linea 45
    $query_venta = "INSERT INTO venta VALUES('$id_venta', '$id_empleado')";
    mysqli_query($conexion,$query_venta);

    //Se define la primera caja de información txt_venta_1
    $i=1;
    //Se comprueba que txt_venta_2 o siguientes existan
    while( isset($_POST['txt_venta_'.$i])  ){
        $contenido_txt = $_POST['txt_venta_'.$i];
        $contenido_txt = explode($contenido_txt);
        //El contenido consiste en el id_producto<*>cantidad en el txt_venta_n, se separan por posiciones mediante la funcion nativa explode(array[])
        $id_producto=$contenido_txt[0];
        $cantidad=$contenido_txt[1];
        // Se extrae el id mayor de la tabla venta_producto
        $query_id_venta_producto="SELECT max(id_venta_producto) from venta_producto";
        $consulta = mysqli_query($conexion,$query_id_venta_producto);
        $fila = mysqli_fetch_row($consulta);
        $id_venta_producto = trim($fila[0]);
        if ($id_venta_producto==null) {
            $id_venta_producto = 1;
        }
        else {
            $id_venta_producto = $id_venta_producto + 1;
        }
        // Fin de extraer el id mayor de la tabla venta_producto

        //Se inserta una nueva fila en venta_producto, por cada producto de la tabla tabla_ventas
        $query_venta_producto = "INSERT INTO venta_producto 
                                VALUES( '$id_venta_producto', 
                                        '$id_producto', 
                                        '$id_venta',
                                        '$cantidad'
                                    )";

        mysqli_query($conexion,$query_venta_producto);
        $i++;
    }

    //Se retorna al archivo venta.php
    header("location:ventas_sadm.php");

?>