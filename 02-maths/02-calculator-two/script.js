/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    
    const performOperation = operation => {
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        // perform the operation
        console.log(operation);
        switch (operation){
            case 'addition':
                result = op1 + op2
                alert(result); 
                break;

            case 'substraction':
                result = op1 - op2
                alert(result);
                break;
                
            case 'multiplication':
                result = op1 * op2
                alert(result);
                break;

            case 'division':
                result = op1 / op2
                alert(result);
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
