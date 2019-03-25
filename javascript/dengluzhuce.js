// 判断是否登陆了

console.log(window.location.search);
//1？摘掉

// console.log(String.prototype);
// console.log(window.location.search.slice(1, window.location.search.length));
var arr = window.location.search.slice(1, window.location.search.length).split("&");
// 再取键值对

function getKey(arr,name){
    var key="";
    arr.forEach(element => {
        if (name == element.split("=")[0]) {
            console.log(element.split("=")[1]);
            key = element.split("=")[1];
        }
    });
    return key;
}
$("#name-id").text(getKey(arr, "name"));
$("#name-id").parent().append($("<div style='display:inline'>" + (getKey(arr, "huiyuan")=="huiyuan"?"会员":"普通用户") +"</div>"));
// getKey(arr,"huiyuan");


//登录
$("#denglu").on("click",function(){
    $.ajax({
        url: "php/denglu.php",                  //路径
        type: "post",             //请求方式
        data: { "name": $("#t1").val(),"password":$("#t2").val() },         //传入的数据
        success: function (data) {  //成功后的回调函数，参数是responseText  
            // alert(data); 
            if (data=="1") {
                alert("登录成功");
                // window.location.replace("index.html");
                // $(location).attr('href', 'index.html', 'target', 'blank');
                console.log($("#t1").val());
                window.open("index.html?name="+$("#t1").val()+"&huiyuan=huiyuan");
            }
            if(data=="2"){
                alert("密码错误");
            }
            if(data=="0"){
                alert("用户名不存在");
            }
        }
    })
   
})

//注册
$("#zhuce").on("click", function () {
    $.ajax({
        url: "php/zhuce.php",                  //路径
        type: "post",             //请求方式
        data: { "name": $("#t1").val(), "password": $("#t2").val() },         //传入的数据
        success: function (data) {  //成功后的回调函数，参数是responseText  
            alert(data);
        }
    })
})