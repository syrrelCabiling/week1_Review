import Person from "./modules/DataObjects.js";

// IIFE - Immediately Invoiced Function Expression
(() => {
    console.log('fired!');

    console.log(Person);
    debugger;
})();