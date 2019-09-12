/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      var tableau = new Array;
      //initialise 
    document.getElementById("run").addEventListener("click", () => {
    // boucle dans les cellules pour y attribuer le nombre aleatoire
    for (i = 1; i < 11; i++) {
    tableau[i-1] = getRandomInt(101);
    document.getElementById("n-"+i).innerHTML = tableau[i-1];
    }
    tableau.sort((a,b) => a - b)
    //nombre mini
    document.getElementById("min").innerHTML = tableau[0];

    //nombre maxi
    document.getElementById("max").innerHTML = tableau[(tableau.length)-1];

    //somme nombre
    let sum = 0
    for (i = 0; i < tableau.length; i++){
      sum += tableau[i];
    }
    document.getElementById("sum").innerHTML = sum
    

    //moyenne 
    let ave = sum/tableau.length; i++;
    
    document.getElementById("average").innerHTML = ave;
    })
    // your code here
})();
