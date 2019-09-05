/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        var aResult = parseInt(op1) + parseInt(op2);
        alert (aResult);
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        var sResult = op1 - op2;
        alert (sResult);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        var mResult = op1 * op2;
        alert (mResult);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        var mResult = op1 / op2;
        alert (mResult);
        // perform an division
    });
})();
