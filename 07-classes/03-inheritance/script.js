/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
        constructor(name) {
            this.name = name;
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name)
        }
        static greeting = "MIAOUSSSSSS Oui la guerre !"
    }

    class Dog extends Animal {
        constructor(name){
            super(name);
        }
        static greeting = "CANIIIIINOSSSS !"
    }

    document.getElementById("run").addEventListener("click", () => {
        let miaous = new Cat("Miaous");
        let caninos = new Dog("Caninos");
        console.log(miaous.sayHello());
        console.log(caninos.sayHello());


    })
    // your code here
})();
