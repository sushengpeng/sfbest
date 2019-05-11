<?php

    include "conn.php";
    $itemid = $_REQUEST['itemid'];
    $username = $_REQUEST['username'];
    
        $sql="DELETE FROM t_shopping WHERE itemid='$itemid' and username='$username'";
    if($conn->query($sql)===TRUE){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>    