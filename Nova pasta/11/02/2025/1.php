<?php
function dia_atual()
{
    $hoje = getdate();
    switch($hoje["wday"])
    {
        case 0 :
            return "Domingo";
            break;

            case 1 :
                return "segunda";
                break;

            case 2 :
                 return "terça";
                break;


             case 3:
                return "quarta";
                break;

            case 4 :
                return "quinta";
                break;
                        
            case 5 :
                return "sexta";
                break;

            case 6:
                return "sabado";
                break;
                                 
}
}
$dia = dia_atual();
echo "<h2> Hoje é $dia </h2>";

?>