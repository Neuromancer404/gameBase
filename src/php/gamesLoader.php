<?php
$request = $_POST['request'];
$count = $_POST['count'];
$driver = 'mysql';
$host = 'localhost';
$port = '3306';
$db_name = 'gamebase';
$db_user = 'root';
$db_pass = 'qqwweerrttyy123';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
$idCount;
$gamesList;
$pdo;

//returnError($request);
try{
    $pdo = new PDO("$driver:host=$host;port=$port;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
}catch(PDOException $e){
    returnError("Error to connect data base");
}
try{

                $stmt = $pdo->query("select $request from gomez where game_id = $count");
                while ($row = $stmt->fetch())
                {
                    send($row["$request"]);
                }
    }
    catch(PDOException $e){
        returnError("biba");
    }

function send($data){
    $answer = array(
        "$request" => $data,
    );
    header('Content-Type: application/json');
    $json = json_encode($data);
    echo ($json);
    exit;
}

function returnError($data){
    $answer = array(
        'errorType' => $data,
    );
    header('Content-Type: application/json');
    $json = json_encode($answer);
    echo ($json);
    exit;
}
?>