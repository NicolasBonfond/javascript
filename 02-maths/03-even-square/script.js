/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        for (let number = 1; number<21; number++){
            if ((number%2) == 0) {
                console.log(number**2)
            }
            else{
                continue;
            }
        }

    });
})();
