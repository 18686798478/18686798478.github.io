<?php

header("content-type:text/html;charset=utf-8");
	//select
    // 创建连接
    $conn = new mysqli("localhost:3307", "root", "root", "app");
    // 检测连接
  if ($conn->connect_error) {
      die("连接失败: " . $conn->connect_error);
   } else{
      // echo "成功";
   }
  $sql = "select * from user";


	//执行sql，将结果查询结果赋值给$result
  $result=$conn->query($sql);




  if( $result && $result->num_rows>0 ){
    //fetch_all方法获取结果集
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // 参数fetch_type可以为MYSQLI_NUM（索引数组，默认）、MYSQLI_ASSOC（关联数组)、MYSQLI_BOTH（两者都要）
      // print_r($res);
      
      function login(){
        global $res,$conn;
     foreach( $res as $row ) {
         if($row["name"]==$_REQUEST["name"])
         {
            // if($row["password"]==$_REQUEST["password"])
            // {
            //     //登陆成功
            //     die(print(1));
            // }else{
            //     //密码错误
            //     die(print(0));
            // }
            die(print("用户名已存在"));
         }
     }
     //用户名不存在
    //  print(2);
     $sql = "INSERT INTO user (name,password) VALUES ('$_REQUEST[name]','$_REQUEST[password]')";

     if($conn->query($sql) === TRUE)
     {
         echo "注册成功";
     }else{
         echo "Error: " . $sql . "<br>" . $conn->error;
     }

    }
    login();
      
      
} else {
    echo "error:".$mysqli->errno." : ".$mysqli->error;
}
  $conn->close();





?>