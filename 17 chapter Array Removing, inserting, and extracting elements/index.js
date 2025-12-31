// Arrays: Adding and extracting elements.
// .push() is used to insert an element in last.
// .pop() is used to remove an element in last.
// .unshift() is used to insert an element in begining.
// .shift() is used to remove an element in begining.
// .slice() is used to make changes anywhere in the array but by making the copy and then it changes.
// splice() is used to make changes anywhere in the array but making changes in the original array. 
var pets = ["dog ","cat ", "hamster ", "horse ", "birds" , "chicken "]
console.log(pets)
// pets.splice( 2, 2 ,"pig", "duck", "emu")
// console.log(pets)
var example = pets.slice( 2 , 3)
alert(pets)