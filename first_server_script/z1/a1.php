<?php
//    $_POST['num1'] = 7;
//    $_POST['num2'] = 9;
    if (isset($_GET['num1']) && $_GET['num1']!='' && isset($_GET['num2']) && $_GET['num2']!='') {
        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];
        echo "$num1 + $num2 = ".($num1+$num2);
    }
    else {
        echo 'Ошибка! Введите числа';
    }
?>