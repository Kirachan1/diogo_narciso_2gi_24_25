<!DOCTYPE html>
<html lang = "pt-pt">
<head>
<meta_charset="UTF-8">
<title> Aula 6 - Array indexado </title>
<body>
    <?php
        $carros = array("porshce", "BMW" , "Ferrari", "Mercedes");
        $tamanho = count($carros);

        for($x = 0 ; $x < $tamanho; $x++) {
        echo $carros[$x];
        echo "<br>";
        }
    ?>
    </body>
    </html>

