


var date=new Date()

var todaydate=new Date(date).getTime()

var newdate=new Date("07/10/2022").getTime()
var total=newdate-todaydate;
var total1=Math.ceil(total/(1000*60*24*60));
document.getElementById("card-t3").innerHTML= " عید کے پہلے دن میں" + total1 + "دن باقی ہیں";
var date=new Date()

var todaydate=new Date(date).getTime()

var newdate=new Date("07/11/2022").getTime()
var total=newdate-todaydate;
var total1=Math.ceil(total/(1000*60*24*60));
document.getElementById("card-t2").innerHTML= " عید کے دوسرے دن میں" + total1 + "دن باقی ہیں";
var date=new Date()

var todaydate=new Date(date).getTime()

var newdate=new Date("07/12/2022").getTime()
var total=newdate-todaydate;
var total1=Math.ceil(total/(1000*60*24*60));
document.getElementById("card-t1").innerHTML= " عید کے تیسرے دن میں" + total1 + "دن باقی ہیں";

function Qurbani(){
var date=new Date()

var todaydate=new Date(date).getTime()

var newdate=new Date("07/12/2022").getTime()
var total=newdate-todaydate;
var total1=Math.ceil(total/(1000*60*24*60));
var total2=Math.ceil(total/(1000*60*60));
var qur=total1 + "Days" + total2 +"Hours Left ";
swal("آپ  "+ total1 +"دنوں میں حصہ لے سکتے ہیں۔" +"جو گھنٹوں میں ہے "+total2+" گھنٹے" + "کیا آپ حصہ لینا چاہتے ہیں؟", {
    buttons: ["جی ہاں", "نہیں"],
  });
}



