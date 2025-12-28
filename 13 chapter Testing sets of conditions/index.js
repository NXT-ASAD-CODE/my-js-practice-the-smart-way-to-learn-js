// Testing sets of conditions
// if you want to check sets of condtion in a single we will use && (and) , || (or) , ! (not) operators.
// using && (and) operators.
// var age = prompt("Enter Your age");
// var marks = prompt("Enter Your marks Out for 1100");
// if (age >= 18 && marks >= 550){
//     alert("You can applay")
// }
// else{
//     alert("You cannot applay");
// }

// using || (or) operators
// var sport = prompt("Enter Your Sports");
// if (sport==="batball" || sport==="football"){
//     alert("You can applay")
// }
// else{
//     alert("You cannot applay")
// }

// using ! (not) operator
var age = Number(prompt("Enter your age"));
if (age !== 18){
    alert("Your age is not 18")
}
else{
    alert("your age is 18")
}