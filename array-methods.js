/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// VARIABLES //
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
let printDiv = document.getElementById("planets");

// FOR LOOP //
// for(i = 0; i < planets.length; i ++) {
//     console.log("for loop working: ");
//     printDiv.innerHTML += `<ul><li>${planets[i]}</li></ul>`;
// };

// FOR-EACH METHOD //
planets.forEach(function(planet) {
    printDiv.innerHTML += `<p id ="freach">${planet}</p>`
});


/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalPlanets = planets.map(function(terraform){
    return terraform.charAt(0).toUpperCase() + terraform.slice(1);
});

capitalPlanets.forEach(function(planet) {
    printDiv.innerHTML += `<p id="cap">${planet}</p>`
});


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let planetsWithE = (planet) => { for (var j = 0; j < planet.length; j++){
    if (planet[j].includes("e") === true || planet[j].includes("E") === true){
        return planet[j];
    }
}}

let capitalPlanetsWithE = capitalPlanets.filter(planetsWithE);

capitalPlanetsWithE.forEach(function(planet) {
    printDiv.innerHTML += `<p id = "e">${planet}</p>`
});
// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]