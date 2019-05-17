<?php
    include 'conn.php';
    $itemid = $_REQUEST['itemid'];
    $username = $_REQUEST['username'];
    $num = $_REQUEST['num'];
    $arr1 = explode(",","$itemid");
    $number= 0;
    for($i=0;$i<=count($arr1);++$i){
        $sql="insert into t_shopping(itemid,username,num) value('$arr1[$i]','$username','$num')";
        $result=$conn->query($sql);
        // echo $result;
        if($conn->query($sql)===TRUE){
            $number++;
        }
    }
    if($num==count($arr1)){
        echo true;
    }else{
        echo "插入失败";
    }
    $conn->close();
?>