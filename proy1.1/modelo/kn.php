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
                <a class="navbar-brand" href="#">SIGEIN</a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="index.php"><a href="index_administrador.php">Inicio</a></li>
                  

                  <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Relevamiento<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="panel_relevamiento.php">Relevamiento completo</a></li>
                        <li><a href="panel_relevamiento_ordenador.php">Relevamiento ordenador</a></li>
                    </ul>
                  </li>

                    <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Soporte<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="panel_registro_soporte.php">Registrar Soporte</a></li>
                        <li><a href="panel_soporte_atender_adm.php">Soportes Pendientes</a></li>
                        <li><a href="panel_soporte_atendido_adm.php">Soportes Atendidos</a></li>
                        <li><a href="panel_otro_soporte_adm.php">Otros Soportes</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Registro de variables<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <!--<li><a href="panel_usuario.php">Panel usuario</a></li>
                        <li><a href="panel_funcionario.php">Panel funcionario</a></li>
                        <li><a href="panel_marca.php">Panel marca</a></li>
                        <li><a href="panel_generacion.php">Panel generacion</a></li>
                        <li><a href="panel_so.php">Panel SO</a></li>
                        <li><a href="panel_edificio.php">Panel edificio</a></li>
                        <li><a href="panel_cargo.php">Panel cargo</a></li>
                        <li><a href="panel_unidad.php">Panel unidad</a></li>
                        <li><a href="panel_backup_adm.php">Panel backups</a></li>
                        <li><a href="panel_material.php">Panel material</a></li>
                      </ul>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="../../views/views_administrador/reportes_sirej_adm.php">Reportes Sirej</a></li>
                  <li><a href="../../../modelo/log_out.php">Cerrar Sesion</a></li>
                </ul>
            </div>
          </div>
          </nav>
 <?php ?>