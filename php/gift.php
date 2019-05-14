<?php
    include "conn.php";
    $gift=$_REQUEST["gift"];
    $sql="select * from t_itemlist where gift='$gift' limit 6";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        while($row=mysqli_fetch_assoc($result)){       
            $arr[]=$row;
        }
        echo json_encode($arr);
    }else{
        echo("数据不存在");
    }
    $conn->close();
?>