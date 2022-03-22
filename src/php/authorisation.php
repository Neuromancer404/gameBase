<?php
$login = $_POST["login"];
$password = $_POST["password"];
session_start();
if(!isset($_SESSION['login'], $_SESSION['password']) || $_SESSION['login'] == '' || $_SESSION['password'] == ''):
print($login.$password);
else:
echo "error";
endif;
?>