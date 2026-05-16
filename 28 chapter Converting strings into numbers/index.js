var age = prompt("What is your age?");
var eligible = age - 18
// we can also minus strings to strings
// exapmle
var a = "100";
var b = "50";
var c = a - b;
console.log(c); // 50
// we can also minus strings to numbers
// example
var d = "100";
var e = 50;
var f = d - e;
console.log(f); // 50
// but we cannot minus a number which is in string format to a number which is in string format which is alphabat
// example
var g = "100";
var h = "abc";
var i = g - h;
console.log(i); // NaN (Not a Number)
// concatenatesion of strings
var j = "100";
var k = "50";
var l = j + k;
console.log(l); // 10050
// concatenatesion of strings and numbers using prompt
var m = prompt("Enter a number");
var n = 50;
var o = m + n;
console.log(o); // if we enter 100 it will print 10050 because prompt always returns a string
// if we want to solve this problem
var p = prompt("Enter a number");
var q = parseInt(p); // this will convert the string into a number
var r = 50;
var s = q + r;
console.log(s); // if we enter 100 it will print 150 because we have converted the string into a number using parseInt() function
// we can also convert deceimal

var u = parseFloat("1.9999"); // this will convert the string into a decimal number
console.log(u); // 1.9999