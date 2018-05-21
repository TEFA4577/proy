 <?php ?>
 <body>
 <div id="custom-bootstrap-menu" class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
    <div class="container">
        <div class="navbar-header"><a class="navbar-brand" href="#">SIGEIN</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse navbar-menubuilder">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index_usuario.php">Inicio</a></li>
               <li><a href="panel_material_usu.php">Recursos de capacitación</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Soporte<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="soporte_sol_usu.php">Soportes Solucionados</a></li>
                <li><a href="soporte_n_sol_usu.php">Soportes No Solucionados</a></li>
                <li><a href="soporte_otro_usu.php">Otro Soporte</a></li>
                <li><a href="reportes_usu.php">Reporte de soporte</a></li>
              </ul>
            </li>
            <li><a href="../../../modelo/log_out.php">Cerrar Sesion</a></li>
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
 <?php ?>   