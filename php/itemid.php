<?php
    include 'conn.php';
    $itemid = $_REQUEST['itemid'];
    $arr1 = explode(",","$itemid");
    for($i=0;$i<=count($arr1);++$i){
        $sql="select * from t_itemlist where id='$arr1[$i]'";
        $result=$conn->query($sql);
        // echo $result;
        if($result->num_rows>0){
            while($row=mysqli_fetch_assoc($result)){
                // echo $row;     
                $arr[] = $row;
            }          
        }
    }
    echo json_encode($arr); 
    $conn->close();
?>