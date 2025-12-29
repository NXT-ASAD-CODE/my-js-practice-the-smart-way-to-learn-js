// Adding and removing elements
var pets = []
pets[0] = "dog";
pets[1] = "cat"
pets[2] = "hamster"
alert(pets) // it will show undefined beacuse index four in undefined.
// there are two ways two add and remove elements from an array
// 1 pop() is used to remove an element from the last.
// 2 push() is used to add an element from the last.
pets.pop() // it removes an element from the end
alert(pets)
pets.push("mouse") // it adds an element from the end
alert(pets)