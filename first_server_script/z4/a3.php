<?php
//    $_POST['sex'] = 'man';
//    $_POST['height'] = 165;
    if (isset($_POST['sex']) && $_POST['sex']!='' && isset($_POST['height']) && $_POST['height']!='' ) {
        $sex = $_POST['sex'];
        $height = $_POST['height'];
        if ($sex =='man') {
            echo "При рості = $height, вага = ".($height - 100)*1.15;
        }
        else {
            echo ($height - 110)*1.15;
        }
    }
    else {
        echo 'Ошибка! Выберите пол и вес';
    }

?>