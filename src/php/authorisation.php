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
    $login = $_POST["login"];
    $pass = $_POST["password"];
    
    if(login ($login, $pass)){
        if(DBchecking($pdo, $login, $pass)){
            errorAnswer($login);
        }
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

function DBchecking($pdo, $login, $pass){
    $stmt = $pdo->query("SELECT * FROM `authorization` WHERE `login` = '$login' AND 'password' = '$pass'");
    var_dump ($stmt);
    while ($row = $stmt->fetch())
    {
        if($row['login'] == $login || $row['password'] == $pass){
            return true;
        }
        else{
            return false;
        }
    }
}

function errorAnswer($login, $pass){
    $answer = array(
        'login' => $login
        /*'nickname' => $nickname*/
        /*'authorisation' => true*/
    );
    header('Content-Type: application/json');
    $json = json_encode($answer);
    echo ($json);
}
?>
