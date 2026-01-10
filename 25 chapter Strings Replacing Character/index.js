// Strings Replacing Character
var text = "I am talking about World War II which was held in 1945. started from germany by the Hitler"
// for(i=0; i<text.length; i++){
//    if(text.slice(i,i+12)==="World War II"){
//     text = text.slice(0,i) + "the secound world war" + text.slice(i+12)
//     console.log(text)
//    }
// }
// we can also do by
// var findingWord = text.indexOf("World War II")
// if(findingWord !== -1){
//     text = text.slice(0,findingWord) + "the secound world war" + text.slice(findingWord+12)
//     console.log(text)
// }
// easy method to replace
// text = text.replace("World War II","The Secound World War")
// console.log(text)
// global method to change
text = text.replace(/"World War II"/g,"The Secound World War")
console.log(text)
