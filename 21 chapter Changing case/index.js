// Changing case
// There are to method to change the case
// 1 => .toLowerCase()
// 2 => .toUpperCase()
// var citytocheck = prompt("enter city name");
// citytocheck = citytocheck.toLowerCase();
// var cleaniestcities = ["karachi", "lahore", "islamabad", "multan", "quetta"]
// for (i = 0; i < cleaniestcities.length; i++) {
//    if (citytocheck === cleaniestcities[i]) {
//       alert("yes it is a cleaniest cities") 
      
//      }

// }
var citytocheck = prompt("enter city name");
citytocheck = citytocheck.toUpperCase();
var cleaniestcities = ["KARACHI", "LAHORE", "ISLAMABAD", "MULTAN", "QUETTA"]
for (i = 0; i < cleaniestcities.length; i++) {
   if (citytocheck === cleaniestcities[i]) {
      alert("yes it is a cleaniest cities") 
      
     }

}


