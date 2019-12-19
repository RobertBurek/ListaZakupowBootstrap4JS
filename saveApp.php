<?php

$nazwapliku = "index.html";

$daneCategoryName = "var categoryName = '".$_POST["categoryName"]."';\n";
$daneOptionView = "var optionView = ".$_POST["optionView"].";\n";
$daneShoppingList = "var shoppingList = ".$_POST["shoppingList"].";\n";
$danePosition = "var position = '".$_POST["position"]."';";
$daneStartParams = $daneCategoryName.$daneOptionView.$daneShoppingList.$danePosition;

$fp = fopen("js/modules/startParams.js", "w");
fputs($fp, $daneStartParams);
fclose($fp);

$daneProduct = "var products = [\n";
$lineLenghProduct = (int) $_POST["lineLenghProduct"];
if ($lineLenghProduct==0) {$daneProduct = "var products = [];";}
else{
    for($i=0; $i<$lineLenghProduct; $i++){
        $temp = "lineProduct".$i;
            if ($i<>$lineLenghProduct-1) {$line = $_POST[$temp].",\n";}
            else {$line = $_POST[$temp]."\n];";}
        $daneProduct = $daneProduct.$line;
    }
}

$fp = fopen("js/modules/products.js", "w");
fputs($fp, $daneProduct);
fclose($fp);

$daneCategory = "var categories = [\n";
$lineLenghCategory = (int) $_POST["lineLenghCategory"];
for($i=0;$i<$lineLenghCategory;$i++){
    $temp = "lineCategory".$i;
        $line = $_POST[$temp].",\n";
    $daneCategory = $daneCategory.$line;
}
$daneCategory = $daneCategory."['Wszystkie','Wszystkie']\n];";

$fp = fopen("js/modules/categories.js", "w");
fputs($fp, $daneCategory);
fclose($fp);

header('Location:'.$nazwapliku);
exit();
?>
