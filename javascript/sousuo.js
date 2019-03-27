// $("#suoyin-1").on("keyup",function(){
//     var spt = document.createElement("script");
//     // var spt = $("<script></script>");
//    spt.src = `https://suggest.taobao.com/sug?code=utf-8&q=${$("#suoyin-1").val()}&_ksTS=1553174001339_284&callback=fn&k=1`
//     $("#head").append(spt);
//     $(spt).attr("id", "st")
//     $("script").remove("#st");


//     if ($("#suoyin-1").val()==""){
//         $("#sousjg").empty()
//     }
// })

// function fn(data){
//     console.log(data.result);
//     var dd=data.result;
//     var str="";
//     dd.forEach(element => {
//         console.log(element[0]);
//         str+=`<li>${element[0]}</li>`
//         $("#sousjg").html(str)
//     });

// }

//定义模块
define(function(){
    return init
})
function init(){




//主页搜索框（输入内容触发）
$("#suoyin-1").on("keyup", function () {
    ss77("#suoyin-1", "#sousjg","fn")
})
//下拉搜索框（输入内容触发）
$("#sousuo-1").on("keyup", function () {
    ss77("#sousuo-1", "#sousk","fnn")
})

//sousuokuang,搜索的文本框
//ulli，搜索框下面的索引内容
//hanshu 调用的函数名 向不同的搜索框下输出索引

function ss77(sousuokuang, ulli,hanshu) {
    var spt = document.createElement("script");
    // var spt = $("<script></script>");
    spt.src = `https://suggest.taobao.com/sug?code=utf-8&q=${$(sousuokuang).val()}&callback=${hanshu}`;
    // spt.src = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=${$(sousuokuang).val()}&cb=${hanshu}`;
    
    // console.log(("https://www.baidu.com/s?wd=_ksTS&rsv_spt=1&rsv_iqid=0x8d8bc7d500087fd9&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=632&rsv_sug4=633").split("&"))
    $("#head").append(spt);
    $(spt).attr("id", "st");
    $("script").remove("#st");


    if ($(sousuokuang).val() == "") {
        $(ulli).empty()
    }
}

//主页向页面输出索引

//下拉搜索向页面输出索引

}
