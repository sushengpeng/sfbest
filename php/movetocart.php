<?php
    include 'conn.php';
    $itemid = $_REQUEST['itemid'];
    $username = $_REQUEST['username'];
    $num = $_REQUEST['num'];
    $sql = "insert into t_shopping(itemid,username,num) value('$itemid','$username','$num')";
    if($conn->query($sql)===TRUE){
        echo true;
    }else{
        echo 插入失败;
    }

    $conn->close();
?>