//Regular function
function Hello() {
  console.log("Hello World");
  //IF we do not return anything, the function silently return "Undefined"
}
console.log(Hello());


//Anonymous Function Expression
const FE = function () {
  console.log("log from Anonymous function expression");
};
FE();


//Named Function Expression
var count = 1;
const NFE = function NFEInside() {
  console.log("Log from Named Function Expression", count, "time");
  count++;

  if (count <= 5) {
    // we can't call the NFEInside() from the outside of the blockScope
    NFEInside();
  }
};
NFE();


//Arrow Function
const Addar = (a,b) =>{
    return a+b;
}
console.log(Addar(5, 7));;


//Anonymous Function
function multiplyBy(factor) {
    return (number) => {
        return number * factor;
    }
}

const double = multiplyBy(2); // এটি এখন যেকোনো সংখ্যাকে ডাবল করার ফাংশন
const triple = multiplyBy(3); // এটি ট্রিপল করার ফাংশন

console.log(double(5)); // আউটপুট: 10
console.log(triple(5)); // আউটপুট: 15