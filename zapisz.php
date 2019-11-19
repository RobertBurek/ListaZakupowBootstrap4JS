<?php

$nazwapliku="index.html";

$dane = "var products = [\n";

$liniaLengh = (int) $_POST["liniaLengh"];
for($i=0;$i<$liniaLengh;$i++){
    $temp="linia".$i;
    if ($i<>$liniaLengh-1) {$linia = $_POST[$temp].",\n";}
    else {$linia = $_POST[$temp]."\n];";}
    $dane = $dane.$linia;
}

$fp = fopen("js/modules/products.js", "w");

fputs($fp, $dane);

fclose($fp);

header('Location:'.$nazwapliku);
?>
