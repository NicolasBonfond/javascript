/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
class person {
constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
get fullName(){
    return this.firstname + " " + this.lastname;
}
set fullName(name){
    [this.firstname, this.lastname] = name.split(" ");
}
}

document.getElementById("run").addEventListener("click", () => {
let nicob = new person("Nicolas", "Bonfond")
console.log(nicob.fullName);
nicob.fullName= "Benoit Bonfond";
console.log(nicob.fullName);
})
})();
