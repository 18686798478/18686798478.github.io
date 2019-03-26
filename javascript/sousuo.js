$("#suoyin-1").on("keyup",function(){
    var spt = document.createElement("script");
    // var spt = $("<script></script>");
   spt.src = `https://suggest.taobao.com/sug?code=utf-8&q=${$("#suoyin-1").val()}&_ksTS=1553174001339_284&callback=fn&k=1`
    $("#head").append(spt);
    $(spt).attr("id", "st")
    $("script").remove("#st");


    if ($("#suoyin-1").val()==""){
        $("#sousjg").empty()
    }
    if ($("#suoyin-1").val() != "")
})

function fn(data){
    console.log(data.result);
    var dd=data.result;
    var str="";
    dd.forEach(element => {
        console.log(element[0]);
        str+=`<li>${element[0]}</li>`
        $("#sousjg").html(str)
    });
    
}