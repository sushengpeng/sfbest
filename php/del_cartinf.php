<?php
    include "conn.php";
<<<<<<< HEAD
    $itemid = $_REQUEST['itemid'];
    $username = $_REQUEST['username'];
    
        $sql="DELETE FROM t_shopping WHERE itemid='$itemid' and username='$username'";
=======
    $itemid=$_REQUEST['itemid'];
    $sql="DELETE FROM t_shopping WHERE itemid='$itemid'";

>>>>>>> c57185cd69a16d84ac39647abd8ec492a4d587f3
    if($conn->query($sql)===TRUE){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>    