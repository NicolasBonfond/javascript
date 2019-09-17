/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //parent
    let image = document.querySelector("img")
    //attribut hover
    let h = image.dataset.hover;
    let hvaleur = h.value;
    //attribut image
    let a = image.getAttribute("src");
    let avaleur = a.value;

    //event hover
    image.addEventListener("mouseover", function(event) {
    avaleur.innerHTML = hvaleur;
    })


})();
