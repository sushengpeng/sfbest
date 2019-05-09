<?php
    include 'conn.php';
    $username=$_REQUEST['username'];
    $sql="select * from t_itemlist where id in (select itemid from t_shopping where username='$username')";
    $sql2="select num from t_shopping where username='$username' order by itemid asc";
    $result=$conn->query($sql);
    $res=$conn->query($sql2);
    if($result->num_rows>0){
        while($row1=mysqli_fetch_assoc($result)and$row2=mysqli_fetch_assoc($res)){
            $arr1[0] =$row1;
            $arr2[0] = $row2;
            $arr[]=array_merge($arr1,$arr2);
        }
        echo json_encode($arr);
    }else{
        echo "false";
    }
    $conn->close();
?>