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
// define(function(){
//    return {
//     sousuo:ss77
//     }
// })



//主页搜索框
$("#suoyin-1").on("keyup", function () {
    ss77("#suoyin-1", "#sousjg","fn")
})
//下拉搜索框
$("#sousuo-1").on("keyup", function () {
    ss77("#sousuo-1", "#sousk","fnn")
})



function ss77(sousuokuang, ulli,hanshu) {
    var spt = document.createElement("script");
    // var spt = $("<script></script>");
    spt.src = `https://suggest.taobao.com/sug?code=utf-8&q=${$(sousuokuang).val()}&_ksTS=1553174001339_284&callback=${hanshu}&k=1`
    $("#head").append(spt);
    $(spt).attr("id", "st")
    $("script").remove("#st");


    if ($(sousuokuang).val() == "") {
        $(ulli).empty()
    }
}

//主页向页面输出索引
function fn(data) {
    console.log(data.result);
    var dd = data.result;
    var str = "";
    dd.forEach(element => {
        console.log(element[0]);
        str += `<li>${element[0]}</li>`
        $("#sousjg").html(str)
    })
}
//下拉搜索向页面输出索引
function fnn(data) {
    console.log(data.result);
    var dd = data.result;
    var str = "";
    dd.forEach(element => {
        console.log(element[0]);
        str += `<li>${element[0]}</li>`
        $("#sousk").html(str)
    })
}

