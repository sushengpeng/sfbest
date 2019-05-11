<?php
    include "conn.php";
    $username=$_REQUEST["username"];
    $password=$_REQUEST["password"];
    $sql="select * from t_userlist where username='$username' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows==1){
        echo "验证通过";
    }else{
        echo "验证失败";
    }
    $conn->close();
?>