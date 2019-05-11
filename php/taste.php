<?php
    include 'conn.php';
    $kind = $_REQUEST['kind'];
    $sql = "SELECT * FROM t_itemlist WHERE class='$kind'";
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