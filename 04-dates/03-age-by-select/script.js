/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let cDate = new Date();
    let cYear = cDate.getFullYear();
    let cMon = cDate.getMonth()+1;
    let cDay = cDate.getDate();

    console.log(cYear);
    console.log(cMon);
    console.log(cDay);
    document.getElementById("run").addEventListener("click", () => {
        let nYear = document.getElementById("dob-year").value;
        let nMon = document.getElementById("dob-month").value;
        let nDay = document.getElementById("dob-day").value;
        console.log(nYear);
        console.log(nMon);
        console.log(nDay);
        let result = cYear - nYear

        if (cMon<nMon){result --; console.log('Tu as: '+result+' ans');} 
        else if (cDay<nDay) {result --; console.log('Tu as: '+result+' ans')}
        else{ console.log('Tu as: '+result+' ans');}
        

    

       });   // your code here
})();
