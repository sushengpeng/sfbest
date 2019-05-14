<?php
    include "conn.php";
    $id=$_REQUEST["id"];
    // $sql="select itemname from t_itemlist where itemname ='$itemname'";
    $sql="select * from t_itemlist where id ='$id'";
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




