<?php

$nazwapliku="index.html";

    $liniaLenght = $_POST['liniaLenght'];

    $liniaStart  = "var products = [\n";
    $linia0=$_POST['linia0'].",\n";
    $linia1=$_POST['linia1'].",\n";
    $linia2=$_POST['linia2'].",\n";
    $linia3=$_POST['linia3']."\n";
    $liniaEnd  = "];";
    
    $dane = $liniaStart.$linia0.$linia1.$linia2.$linia3.$liniaEnd;

    // echo $liniaStart. '<br />' .$linia0;
    // echo ' dane: '.$liniaStart.$linia0.$linia1.$linia2.$linia3.$liniaEnd.' ;';
// otwarcie pliku do zapisu
$fp = fopen("js/modules/products.js", "w");

// zapisanie danych
fputs($fp, $dane);

// zamknięcie pliku
fclose($fp);

// header('Location:'.$nazwapliku);
?>
