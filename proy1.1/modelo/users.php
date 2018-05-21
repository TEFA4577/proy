<?php

class Users{
	
	public $objDb;
	public $objSe;
	public $result;
	public $rows;
	public $useropc;
	
	public function __construct(){
		
		$this->objDb = new databaseProyecto();
		$this->objSe = new Sessions();
		
	}
	
	public function login_in(){
		
            $sth = $this->objDb->prepare('SELECT * FROM usuario U inner join privilegio P '
                    . 'on U.id_privilegio = P.id_privilegio WHERE U.usuario= :login AND U.password = :pass');
            
            $sth->bindParam(':login', $_POST["usern"]);
            $sth->bindParam(':pass', $_POST["passwd"]);
            
            $sth->execute();
            
            $result = $sth->fetchAll();
            
            if($result){
                
                $profile = $result[0]['des_privilegio'];
                
                switch($profile){
                    case 'SAdministrador':
                        $this->objSe->init();
                        $this->objSe->set('id_usuario', $result[1]['id_usuario']);
                        $this->objSe->set('usuario', $result[0]['usuario']);
                        $this->objSe->set('des_privilegio', $result[0]['des_privilegio']);
                        $this->objSe->set('id_privilegio', $result[0]['id_privilegio']);                         
                        header('Location: ../vista/views/views_sadministrador/index_sadministrador.php');
                        //echo "Ha ingresado como gerente";
			break;
                    case 'Administrador':
                        $this->objSe->init();
                        $this->objSe->set('id_usuario', $result[2]['id_usuario']);
                        $this->objSe->set('usuario', $result[0]['usuario']);
                        $this->objSe->set('des_privilegio', $result[0]['des_privilegio']);
                        $this->objSe->set('id_privilegio', $result[0]['id_privilegio']);                        
                        //echo "Ha ingresado como Ususario Administrador";
                        //echo '<br><a href="log_out.php">Cerrar</a>';
                        header('Location: ../vista/views/views_administrador/index_administrador.php');
			break;
                        case 'Usuario':
                        $this->objSe->init();
                        $this->objSe->set('id_usuario', $result[3]['id_usuario']);
                        $this->objSe->set('usuario', $result[0]['usuario']);
                        $this->objSe->set('des_privilegio', $result[0]['des_privilegio']);
                        $this->objSe->set('id_privilegio', $result[0]['id_privilegio']);                        
                        //echo "Ha ingresado como Ususario Administrador";
                        //echo '<br><a href="log_out.php">Cerrar</a>';
                        header('Location: ../vista/views/views_usuario/index_usuario.php');
                }
                
            }else{
                //header('Location: index.php?error=1');
                //echo "Contrasena incorrecta";
                                echo "<div class ='alert alert-danger'>"."Credenciales incorrectos"."</div>"."<br />";
                               
            }		
	}
        
}