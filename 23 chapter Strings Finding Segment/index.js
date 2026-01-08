// Finding Segment
var text = "you know I am talking about World War II in 1945 . It was started by the germany by Hitler"
// for(i=0; i<text.length; i++){
//     if(text.slice(i,i+12) === "World War II"){
//         text = text.slice(0,i) + "The Secound World War" + text.slice(i+12);
//         console.log(text)
//     }
// }
// another way to check this is
var findingWord = text.indexOf("World War II")
if(findingWord !== -1){
    text = text.slice(0,findingWord) + "The Secound World War" + text.slice(findingWord + 12);
    console.log(text)
}
// to find the last index of a word we can use lastIndexOf
var lastFindingWord = text.lastIndexOf("Hitler")
console.log("lastFindingWord:", lastFindingWord)