<?php
    include "conn.php";
    $class=$_REQUEST["class"];
    $itemid = $_REQUEST['itemid'];
    // echo $num;
    // $sql="select itemname from t_itemlist where itemname ='$itemname'";
    $sql="select * from t_itemlist where class ='$class' and id>$itemid order by id asc limit 6" ;
    // echo $sql;
    $result=$conn->query($sql);
    if($result->num_rows>0){
        while($row=mysqli_fetch_assoc($result)){
            $arr[]=$row;
        }
        if(!empty($result)){
            echo json_encode($arr);
        }  
    }else{  
        echo 0;
    }
    $conn->close();
?>