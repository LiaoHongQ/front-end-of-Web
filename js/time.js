var date = new Date()//获得日期数据
var y = date.getFullYear();//年
var m = date.getMonth()+1;//月
var d = date.getDate(); //日，getDay是获得当前星期几（0-6），getDate是获得当前日期
document.getElementById("mar_time").innerHTML = ""+y+"-"+m+"-"+d;