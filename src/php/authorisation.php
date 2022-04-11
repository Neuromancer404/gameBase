<?php
$login = $_POST["login"];
$password = $_POST["password"];
$role;
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
    $data = $pdo->query("SELECT * FROM authorization WHERE `login` = '$login' " );
    foreach ($data as $row) {
        if($row['login'] == $login && $row['password'] == $password){
            $data = $pdo->query("SELECT nickname FROM authorization WHERE `login` = '$login'");
                foreach($data as $row){
                     $answer = array(
                    'login' => $login,
                    'nickname' => $row['nickname'],
                    'authorisation' => true,
                    );    
                }
            header('Content-Type: application/json');
            $json = json_encode($answer);
            echo ($json);
            exit;
    }
    }
    
}catch(PDOException $e){
    returnError("DB connection error");
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