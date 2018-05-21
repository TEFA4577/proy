<?php ?>
         <body>
          <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
              <!--<a class="navbar-brand" >Farmacia Pasteur</a>-->
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  
                  <!--<li><a>Farmacia Pasteur</a></li>-->

                    <li class="index.php"><a href="../vista/views/views_sadministrador/index_sadministrador.php"><span class="glyphicon glyphicon-home" aria-hidden="true">lnicio</a></li>
                  <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Panel de Usuarios<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="../vista/views/views_sadministrador/clientes_sadm.php">Clientes</a></li>
                        <li><a href="../vista/views/views_sadministrador/empleado_sadm.php">Personal</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Panel de Productos<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="item.php">Productos</a></li>
                        <li><a href="product.php">Perfil del Producto</a></li>
                        <li><a href="../vista/views/views_sadministrador/laboratorio_sadm.php">Laboratorio</a></li>
                        <li><a href="expired.php"> Alertas &#128276;</a></li>
                        
                    </ul>
                  </li>

                    <li class="index.php"><a href="home.php">Venta</a></li>

                  <!--<li><a href="reservas_sadm.php">Pedidos</a></li>-->
                  <!--<li><a href="alertas_sadm.php"> Alertas &#128276;</a></li>-->

                </ul>


                <ul class="nav navbar-nav navbar-right">
                  <!--<li><a href="reportes_sadm.php">Reportes</a></li>-->
                 
                       
                        <li><a href="stock.php">Inventario</a></li>
                   
                  </li>
                  <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Administrador<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="../index.php">Cerrar Sesion</a></li>
                    </ul>
                  </li>
                  <!--<li><a href="../../../index.php">Cerrar Sesion</a></li>-->
                </ul>
            </div>
          </div>
          </nav>
<?php ?>