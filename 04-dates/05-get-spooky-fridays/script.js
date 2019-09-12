/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



    document.getElementById("run").addEventListener("click", () => {
        let date = new Date();
        let inputyear = document.getElementById("year").value;
        let result = "";
        let month = "";
            for (let i = 0; i < 12; i++){
                date = new Date(inputyear, i, 13);
                if (date.getDay() === 5){
                    month = date.toLocaleString("fr-FR", { month: "long" });
                    result += month + "\n";
            }
        }
        alert("Les mois contenants un vendredi 13 sont: " + "\n" + result);
    })
    // your code here
})();
