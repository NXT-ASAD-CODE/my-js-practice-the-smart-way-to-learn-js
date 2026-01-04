// Changing case
// There are to method to change the case
// 1 => .toLowerCase()
// 2 => .toUpperCase()
var citytocheck = prompt("enter city name");
citytocheck = citytocheck.toLowerCase();
var cleaniestcities = ["Karachi", "Lahore", "Islamabad", "Multan", "Quetta"]
for (i = 0; i < cleaniestcities.length; i++) {
   if (citytocheck === cleaniestcities[i]) {
      alert(true)
   }
   else {
      alert(false)
   }
}
// var citytocheck ="Karachi";
// citytocheck = citytocheck.toUpperCase();
// var cleaniestcities = ["Karachi","Lahore","Islamabad","Multan","Quetta"]
// for(i = 0; i<cleaniestcities.length; i++){
//    if(citytocheck===cleaniestcities){
//       console.log("yes it is a cleaniest cities")
//    }
// }

