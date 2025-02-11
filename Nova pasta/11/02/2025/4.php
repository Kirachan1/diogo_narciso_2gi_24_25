<!DOCTYPE html>
<html lang="pt-pt">
    <head>
        <meta charset="UTF-8">
        <title> AULA 6 - Array Inexado </title>
        <body>
            <?php
            $cores[] = "Verde";
            $cores[] = "Azul";
            $cores[] = "Amarelo";
            echo "<h3> Constituição do Array Cores: </h3>";
            echo"<br>";
            $cores[1] = "Laranaja";
            $cores[] = "Vermelho";
            echo "<h3> Constituição do Array Cores: </h3>";
            print_r($cores);
            echo "<h4>Na posição 1 está a cor: " . $cores[1] . "</h4>";
            ?>
        </body>
</html>