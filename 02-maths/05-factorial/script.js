/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let n = Number(document.getElementById("number").value);
        console.log(n);
        let start = n-1;
        if (start > 0) {
        for (i = start; i > 0; i--){
                n = n*i;
                /* console.log(i); */
                console.log(n);
           }}
        else{
        n = 1
        console.log(n);
}        
        // if n > 1
        // n * i;
        // n--;
        // else n = 1;

    });
})();
