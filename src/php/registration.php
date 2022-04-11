<?php
$login = $_POST["login"];
$password = $_POST["password"];
$email = $_POST["email"];
$nick = $_POST["nick"];
$driver = 'mysql';
$host = 'localhost';
$port = '3306';
$db_name = 'gamebase';
$db_user = 'root';
$db_pass = 'qqwweerrttyy123';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
$pdo;
try{
    $pdo = new PDO("$driver:host=$host;port=$port;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
    
}catch(PDOException $e){
    returnError("DB connection error");
}
if(entireCheck($login, $pass)){
    if(loginCheking($pdo, $login)){
        answer($login);
    }else{
        registration($login, $password, $nick, $email, $pdo);
    }
}else{
    returnError("Login or passwod input error");
}

function registration($login, $password, $nick, $email, $pdo){
    $zap = $pdo->query("INSERT INTO authorization VALUES ('$login', '$password', '$nick', 'user', '$email')");
;
    $answer = array(
        'login' => $login,
        'nickname' => $nick,
        'registration' => true,

    );
    header('Content-Type: application/json');
    $json = json_encode($answer);
    echo ($json);
    exit;
}

function answer($login){
    $answer = array(
        'login' => $login,
        'using' => true
    );
    header('Content-Type: application/json');
    $json = json_encode($answer);
    echo ($json);
    exit;
}

function entireCheck($login, $password){

    session_start();
    if($login != "" || $password != ""):
    return true;
    else:
    return false;
    endif;
}

function loginCheking($pdo, $login){
    $stmt = $pdo->query("SELECT * FROM `authorization` WHERE `login` = '$login'");
    while ($row = $stmt->fetch())
    {
        if($row['login'] == $login){
            return true;
        }
        else{
            return false;
        }
    }
}

function returnError($error){
$answer = array(
        'errorType' => $error,
    );
    header('Content-Type: application/json');
    $json = json_encode($answer);
    echo ($json);
    exit;
exit;
}
?>