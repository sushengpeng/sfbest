<?php
    include "conn.php";
    $class = $_REQUEST['class'];
    $sql="SELECT * FROM t_itemlist where class='$class' limit 6";
    $result=$conn->query($sql);
    // echo $sql;
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