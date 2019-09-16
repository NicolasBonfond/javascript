/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    //  convertis le listing set en array
      let arrAdj = Array.from(adjectives);
        console.log(arrAdj)
    // initialisation button     
    document.getElementById("run").addEventListener("click", () => {
        // adjectif aléatoire
        let adj = arrAdj[getRandomInt(arrAdj.length)];
        console.log(adj);
        // Oiseau aléatoire
        let bird = birds[getRandomInt(birds.length)];
        console.log(bird);
        // attributs oiseaux 
        let birdname = bird.name
        let birdtype = bird.fem;
        console.log(birdname);
        if (birdtype === undefined){birdtype = false;}
        else {birdtype = true;}
        console.log(birdtype);
        //condition féminin / masculin
        if (birdtype === true){document.getElementById("target").innerHTML = (birdname +" "+adj+"e")} 
        else {document.getElementById("target").innerHTML = (birdname +" "+adj)} 


    })

    // your code here
})();
