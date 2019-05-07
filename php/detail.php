<?php
    include 'conn.php';
    $itemid = $_REQUEST['itemid'];
    $sql = "select * from t_itemlist where id='$itemid'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        while($row=mysqli_fetch_assoc($result)){
            $arr[] = $row;
        }
        echo json_encode($arr);
    }else{
        echo false;
    }
    $conn->close();
?>