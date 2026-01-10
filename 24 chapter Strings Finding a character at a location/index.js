// Finding Character at a Location
var myname = "Asad"
var firstCharacter = myname.slice(0,1)
// we can also do this 
var FirstCharacter = myname.charAt(0)
// for accessing the last number
var lastChar = myname.charAt(myname.length-1);
var text = "My name is Asad !"
for(i = 0; i < text.length; i++){
if(text.charAt(i)=== "!"){
    alert("Exclamation Found")
    break;
}
}