/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let n = document.getElementById("numbers").value;
        console.log(n);
        let n2 =n.split(", ");
        console.log(n2);

        let n3 = n2.map(Number);
        console.log(n3);

        function compare(x, y) {
            return x - y;
        }

        n3.sort(compare);

        console.log(n3);

/* 
        let n3 = n2.forEach(function(element) {
            parseInt(element);
        }); */

 /*        
       console.log(n);
       console.log(Array.from(n)); */

    });
})();
