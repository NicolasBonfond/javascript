/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let cDate = new Date;
    let cDayn = cDate.getDay();
    let cDay = cDate.getDate();
    let cMon = cDate.getMonth();
    let cYear = cDate.getFullYear();
    let cHour = cDate.getHours();
    let cMin = cDate.getMinutes();
    console.log(cDayn);
    console.log(cDay);
    console.log(cMon);
    console.log(cYear);
    console.log(cHour);

    //specs des valeurs mois et jours dans un tableau 
    let jours = new Array ("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
    let mois = new Array ("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre")
    
    function datefr() 
    {
    let message = jours[cDayn] + " ";
    message += cDay + " ";
    message += mois[cMon] + " ";
    message += cYear + ", ";
    message += cHour + "h ";
    message += cMin + "min ";
    return message;

    }



    document.getElementById("target").innerHTML = datefr();
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
