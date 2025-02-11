<!DOCTYPE html>
<html lang = "pt-pt">
<head>
<meta_charset="UTF-8">
<title> Aula 6 - Array indexado </title>
<body>
    <?php
        $carros = array("Volvo", "BMW", "Toyota");
        echo "<h2> O array tem " . count ($carros) . "carros . </h2> ";
        $carros[] ="Mercedes";
        echo "<h2>" Agora o array tem" . count($carros) . "carros. </h2>";
        print_r($carros);
    ?>