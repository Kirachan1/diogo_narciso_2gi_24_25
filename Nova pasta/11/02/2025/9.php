<!DOCTYPE html>
<html lang="pt-pt">
    <head>
        <meta charset="UTF-8">
        <title> AULA 6 - Array Indexado - Ciclo fareach </title>
        <body>
            <?php
            $frutas = ["Amoras" , "Framboesas" , "Morangos" , "Cerejas" ];

            echo"Imprime o par Chave => Valor: <br>";
            //forma com chave
            foreach($frutas as $chave => $valor){
                echo $chave . " => " . $valor . "<br>";

            }

            echo"<hr>";

            echo"Imprime apenas o Valor: <br>";
            //Forma sem chave
            foreach($frutas as $valor){
                echo $valor . "<br>";
            }
            ?>
        </body>
</html>