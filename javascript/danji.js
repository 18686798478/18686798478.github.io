// alert("欢迎来到超级超级假淘宝")
// 点击关闭二维码框
var erweima=document.getElementById("erweima")
var guanbi = document.getElementById("guanbi")
guanbi.onclick=function(){
    // var flag=true;
    // if(flag){
        erweima.style.display="none";
    }

    //淘抢购 倒计时
var hos =document.getElementsByClassName("time-a")
var minus = document.getElementsByClassName("time-b")
var secods = document.getElementsByClassName("time-c")
//定时器执行时间函数
daojishi()
setInterval(function(){
    daojishi()
    
},1000)
//时间函数
function daojishi(){
    var d = new Date();
    var d2 = new Date(2019, 2, 27, d.getHours()+5, 0, 0);
    var timec = (d2.getTime() - d.getTime()) / 1000;
    
    var day = parseInt(timec / 60 / 60 / 24);
    var h = parseInt((timec - day * 24 * 60 * 60) / 60 / 60);
    var m = parseInt((timec - day * 24 * 60 * 60 - h * 60 * 60) / 60);
    var s = parseInt(timec - day * 24 * 60 * 60 - h * 60 * 60 - m * 60);

    hos[0].innerHTML = `${h}`;
    minus[0].innerHTML = `${m}`;
    secods[0].innerHTML = `${s}`;
}
//下拉滚动条效果

//下拉右侧浮动楼层
var lc = document.getElementById("lc")
var lic = lc.getElementsByTagName("li")//li标签
var louceng = document.getElementById("louceng")
var louceng1 = document.getElementById("louceng-1")
var louceng2 = document.getElementById("louceng-2")
var louceng3 = document.getElementById("louceng-3")
var louceng4 = document.getElementById("louceng-4")
var louceng5 = document.getElementById("louceng-5")
var louceng6 = document.getElementById("louceng-6")
var louceng7 = document.getElementById("louceng-7")
var louceng8 = document.getElementById("louceng-8")
var xlsousuo=document.getElementById("xlsousuo")

window.onscroll=function(){
    var juli=document.documentElement.scrollTop;
    if(juli>123){
        xlsousuo.style.display="block";
    }else{
        xlsousuo.style.display = "none";
    }
// 右侧浮动楼层  没做完
    var fudong = document.documentElement.scrollTop;
    if (fudong >444) {     
        louceng.style.position = "fixed"
        louceng.style.top = "50px"
        // console.log(1)
        for (var k = 0; k < lic.length; k++) {
            lic[k].style.background = "none"
        }
        if(fudong>444&&fudong<682){
            louceng1.style.background = "yellow"
        }
         else if(fudong>682&&fudong<784){
            louceng2.style.background="yellow"
        }else if(fudong>784&&fudong<1461){
            louceng3.style.background="yellow"
        }else if(fudong>1461&&fudong<1743){
             louceng4.style.background = "yellow"
        }  
    } 
    else {
        louceng.style.position = "absolute"
        louceng.style.top = "486px"
        for (var k = 0; k < lic.length; k++) {
            lic[k].style.background = "none"
        }
        louceng1.style.background = "yellow"
    }
}


 louceng1.onclick=function(){
     fn(louceng1,0)
}
louceng2.onclick = function () {
    fn(louceng2,690)
    
}

 louceng3.onclick = function () {
    fn(louceng3,794)

}
louceng4.onclick = function () {
    fn(louceng4, 1461)

}
// 滚动条位置楼层函数调用
function fn(ele,gaodu){
    clearInterval(ele.timer)
    if (document.documentElement.scrollTop < gaodu) {
        ele.timer = setInterval(function () {
            document.documentElement.scrollTop = document.documentElement.scrollTop + 15;
            if (document.documentElement.scrollTop >=gaodu) {
                clearInterval(ele.timer)
            }
        })

    }
    else if (document.documentElement.scrollTop > gaodu) {
        ele.timer = setInterval(function () {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 15;
            if (document.documentElement.scrollTop <= gaodu) {
                clearInterval(ele.timer)
            }
        })
    }
}



//右侧鼠标经过显示（暂时点击）
var gonggao=document.getElementsByClassName("gong-gao")
var gonggao01 = document.getElementsByClassName("gong-gao-01")

var guize = document.getElementsByClassName("gui-ze")
var guize02 = document.getElementsByClassName("gui-ze-02")

var luntan = document.getElementsByClassName("lun-tan")
var luntan03 = document.getElementsByClassName("lun-tan-03")

var anquan = document.getElementsByClassName("an-quan")
var anquan04 = document.getElementsByClassName("an-quan-04")

var gongyi = document.getElementsByClassName("gong-yi")
var gongyi05 = document.getElementsByClassName("gong-yi-05");

huaguo()
gonggao01[0].style.display = "block"

gonggao[0].onclick=function(){
    huaguo()
    gonggao01[0].style.display="block"
}

guize[0].onclick = function () {
    huaguo()
    guize02[0].style.display = "block"
}
luntan[0].onclick = function () {
    huaguo()
    luntan03[0].style.display = "block"
}
anquan[0].onclick = function () {
    huaguo()
    anquan04[0].style.display = "block"
}
gongyi[0].onclick = function () {
    huaguo()
    gongyi05[0].style.display = "block"
}
// 调用的函数（鼠标点击调用）让每个元素隐藏
function huaguo(){
    var arr = [gonggao01[0], guize02[0], luntan03[0], anquan04[0], gongyi05[0]]
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none"
    }
}

// 轮播图div
var lunbodv=document.getElementById("lunbodv")
console.log(lunbodv)
//自动轮播定时器
var i=0;
var timer=null;
autoPlay()

// 轮播图左边按钮效果
var leftbt=document.getElementById("leftbt")
var rightbt = document.getElementById("rightbt")
leftbt.onclick=function(){
    i--
    if(i<=-1){
        lunbodv.style.left="-2080px"
        i=3;
    }
    move(lunbodv,"right",-520*i)
   zhishiqi()
}
// 轮播图右边按钮效果
rightbt.onclick = function () {
    i++
    if (i>=5) {
        lunbodv.style.left = "0px"
        i = 1;
    }
    move(lunbodv, "left", -520 * i)
   zhishiqi()
}
// 单机指示器效果
var zsqul=document.getElementById("zsqul")
var zsqli=zsqul.getElementsByTagName("li")
console.log(zsqli)
for(let k=0;k<zsqli.length;k++){
    zsqli[k].onclick=function(){
        move(lunbodv,k>i?"left":"right",-520*k);
        i=k;
        zhishiqi()
    }
}
// 鼠标移动到图片定时器停止
lunbodv.onmouseover=function(){
    clearInterval(timer)
}
// 鼠标移出到图片定时器开始
lunbodv.onmouseout = function () {
   autoPlay()
}
//自动执行定时器函数
function autoPlay(){
 timer = setInterval(function () {
        i++;
        if (i >= 5) {
            lunbodv.style.left = 0
            i = 1;
        }
        move(lunbodv, "left", -520 * i)
         zhishiqi()
    }, 4000)
   
}
// 指示器显示隐藏函数
function zhishiqi(){
    for (var t = 0; t < zsqli.length; t++) {
        zsqli[t].style.background = "#fff"
    }
    zsqli[i === 4 ? 0 : i].style.background = "red"
}
// 运动函数
function move(ele, dir, end) {
    clearInterval(ele.timer)
    if (dir === "left") {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft - 10 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + 10 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        })
    }
}

//第二个轮播
var lunboct=document.getElementById("lunboct")
var lunbocta = lunboct.getElementsByTagName("a")
var autoNumber = document.getElementById("autoNumber")

var dthul = document.getElementById("dthul")
var dthulli = dthul.getElementsByTagName("li")

var y=0;
//自动轮播函数
setInterval(function(){
    y++;
    if(y>=7){
        lunboct.style.left=0;
        y=1;
    }
    move(lunboct,"left",-520*y)
    // console.log(y)
    autoNumber.innerHTML = y>=6?1:y+1;
    for (var l = 0; l < dthulli.length; l++) {
        dthulli[l].style.background = "red"
    }
    dthulli[y === 6 ? 0 : y].style.background = "black"
},5000)


//第三个轮播
var botmcener = document.getElementById("botmcener")
var x=0;
setInterval(function(){
    x++;
    if(x>=4){
        botmcener.style.top = 0;
        x=1;
    }
movetb(botmcener,"top",-89*x)
},4500)
//第三个轮播调用运动函数
function movetb(ele, dir, end) {
    clearInterval(ele.timer)
    if (dir === "top") {
        ele.timer = setInterval(function () {
            ele.style.top = ele.offsetTop - 1 + "px";
            if (ele.offsetTop <= end) {
                clearInterval(ele.timer);
                ele.style.top = end + "px";
            }
        })
    } 
}
//鼠表点击搜索框上面的淘宝天猫样式
$("#nav_three").on("click","span",function(){
    console.log($(this));
    $("#nav_three>span").removeClass();
    $(this).addClass("baobei");
})

//搜索框移动效果
var ic = true;
$("#baobei").on("click",function(){
    if(ic==true){
        $("#baobei").css("border-bottom-left-radius", "0");
        ic=false;
    }
    else{
        $("#baobei").css("border-bottom-left-radius", "20px");
        ic = true;
    }
    $("#tianmao,#dianpu").slideToggle()
   
})
