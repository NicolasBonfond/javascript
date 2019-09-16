/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var people = {lastname: "Bonfond", firstname: "Nicolas", age: 27, city: "Aywaille", country: "Belgique"}
    document.getElementById("run").addEventListener("click", () => {
    
     console.log("Voici "+people.firstname+" "+people.lastname+", il a "+people.age+" ans et il habite à "+people.city+" en "+people.country);   
    })    // your code here
})();
