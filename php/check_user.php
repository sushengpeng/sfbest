<?php
    include "conn.php";
    $username=$_REQUEST["username"];
    $pwd=$_REQUEST["pwd"];
    $sql="select * from login where username='$username' and passeword='$pwd'";
    $result=$conn->query($sql);
    if($result->num_rows==1){
        echo "验证通过";
    }else{
        echo "验证失败";
    }
    $conn->close();
?>