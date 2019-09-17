/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

// DECLARATION 

// get valeur attribut data-image
let element = document.getElementById('source');
let valeur = element.dataset.image;

//ajout de la balise image
let span = document.getElementById("target");
let image = document.createElement("IMG");
span.appendChild(image);

// donne la valeur de data-image
image.setAttribute("src", valeur);

//supprime l'element source
var parent = document.querySelector(".material");
parent.removeChild(element);
})();
