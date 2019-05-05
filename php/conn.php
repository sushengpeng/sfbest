<?php
    header("content-type:text/html;charset=utf8");
    $hostname= "localhost";
    $uname="root";
    $pwd="root";
    $dbname="db_sfbest";
    $conn = new mysqli($hostname,$uname,$pwd,$dbname);
    if($conn->connect_error){
        die("数据库连接失败：".$conn->connect_error);
    }else{
        // die("数据库连接成功");
    }
?>