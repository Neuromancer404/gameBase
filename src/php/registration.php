
<?php
$driver = 'mysql';
$host = 'localhost';
$port = '3306';
$db_name = 'neurommd_bd';
$db_user = 'neurommd_bd';
$db_pass = 'QwErTy1230q!';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try{
    $pdo = new PDO("$driver:host=$host;port=$port;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
    echo 'connected  ';
    $login = $_POST["login"];
    $pass = $_POST["password"];
    
    if(login ($login, $pass)){
        echo "login or password entire  ";
        DBchecking($pdo, $login);
    }
    else{ 
        echo "login or password error  ";
    }
}catch(PDOException $e){
    die("no connection with base");
}

function login($login, $pass){

    session_start();
    if(!isset($_SESSION['login'], $_SESSION['password']) || $_SESSION['login'] == '' || $_SESSION['password'] == ''):
    return true;
    else:
    return false;
    endif;
}

function DBchecking($pdo, $login){
    $stmt = $pdo->query("SELECT * FROM `authorization` WHERE `login` = '$login'");
    while ($row = $stmt->fetch())
    {
        echo $row['login'] . "\n";
    }
}
?>