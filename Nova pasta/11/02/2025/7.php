<!DOCTYPE html>
<html lang="pt-pt">
    <head>
        <meta charset="UTF-8">
        <title> AULA 6 - Array Associativo </title>
        <body>
            <?php
            $idades = array( "Pedro"=>20 , "Beatiz"=>17 , "Joana"=>19);
            echo"O array idades é composto por: ";
            print_r($idades);
            echo "A Joana tem " . "<b>" . $idades['Joana'] . "</b>" . "anos.";
            echo"<br>"
            $idades['Beatriz']=18 //atualiza a idade da Beatriz
            echo"<br>";
            echo "A Beatriz tem agora " . "<b>" . $idades['Beatriz'] . "</b>" . "anos.";
            echo"<hr>";
            var_dump($idades);
            ?>
        </body>
</html>