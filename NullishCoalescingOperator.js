// The Nullish Coalescing Operator (??) only checks if a value is strictly null or undefined.

const lang = "C";
const lang2 = null;
const lang3 = false;

console.log(lang ?? "C++"); //output: C
console.log(lang2 ?? "js"); //output: js
console.log(lang3 ?? "java"); //output: false 
//---------------------------------------------------------

console.log(lang || "C++"); //output: C
console.log(lang2 || "js"); //output: js
console.log(lang3 || "java"); //output: java
//---------------------------------------------------------

console.log(lang && "C++"); //output: C++
console.log(lang2 && "js"); //output: null
console.log(lang3 && "java"); //output: false
