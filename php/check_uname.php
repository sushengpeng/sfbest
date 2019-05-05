<?php
    include "conn.php";
    $username = $_REQUEST["runame"];
    $sql = "select username from login where username ='$username'";
    $result = $conn->query($sql);
    if($result->num_rows==0){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>