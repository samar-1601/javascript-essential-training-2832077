/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Laptop from "./Laptop.js";

const laptop = new Laptop("Samar", "Apple", "15", "Metallic Grey")

console.log(laptop)
console.log(Laptop)
console.log("laptop's color before : ", laptop.color)
laptop.changeColor('Cherry Red')
console.log("laptop's color before : ", laptop.color)
console.log(laptop.toString())