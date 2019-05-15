<?php
    include "conn.php";
    $itemid=$_REQUEST['itemid'];
    $sql="DELETE FROM t_shopping WHERE itemid='$itemid'";

    if($conn->query($sql)===TRUE){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>    