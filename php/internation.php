<?php
    include "dbconn.php";
    $itemname=$_REQUEST["itemname"];
    $sql="select itemname from t_itemlist where itemname ='$itemname'";
    $result=$conn->query($sql);
    if($result->num_rows==0){
        echo "没有重名";
    }else{  
        echo "重名";
    }
    $conn->close();
?>