<?php
    include "conn.php";
    $class=$_REQUEST["class"];
    // $sql="select itemname from t_itemlist where class ='$class'";
    $sql="select * from t_itemlist where class ='$class'";
    $result=$conn->query($sql);
    if($result->num_rows>=0){
        while($row=mysqli_fetch_assoc($result)){
            $arr[]=$row;
        }
        echo json_encode($arr);
    }else{  
        echo "false";
    }
    $conn->close();
?>




