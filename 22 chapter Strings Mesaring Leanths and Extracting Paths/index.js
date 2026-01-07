// Making fist text capital and other text small using slice method
// splice changes in the original array
// slice make a copy and do not change in the original
// var cityToCheck = prompt("Enter city name")
// var firstChar = cityToCheck.slice(0,1)
// var otherChar = cityToCheck.slice(1)
// firstChar = firstChar.toUpperCase()
// otherChar = otherChar.toLowerCase()
// var result = firstChar + otherChar
// alert(result)
// if you want to check there is an double spaces in the user input we can do by using this technique
var line = prompt("Enter Some Text")
var lenghtVar = line.length;
for(i=0; i<lenghtVar; i++){
    if(line.slice(i,i+2) === "  "){
        alert("No Double Spaces")
        break;
    }
}