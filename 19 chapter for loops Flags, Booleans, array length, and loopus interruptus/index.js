// for loops
// var cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
// var matchfound = "no";
// var cityname = prompt("Enter a city name:");
// for (var i = 0; i < cities.length; i++){ 
//     if (cities[i] === cityname) {
//         matchfound = "yes";
//         alert("its one of the cleanest cities");
//     }
//     }
//     if (matchfound === "no") {
//         alert("not on the list");
//     }
    // now trying the boolen values true or false
    var cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    var matchfound = false;
    var cityname = prompt("Enter a city name:");
    for (var i = 0; i < cities.length; i++){ 
        if (cities[i] === cityname) {
            matchfound = true;
            console.log("its one of the cleanest cities");
            break;
        }
    }
    if (matchfound === false) {
        console.log("not on the list");
    }