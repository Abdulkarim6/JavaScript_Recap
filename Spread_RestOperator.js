const colors = ["red", "green", "yellow"];
//spread oparetor
const addMoreColors = [...colors, "blue", "black"];
// output: ['red', 'green', 'yellow', 'blue', 'black']

//----------------------------------------------------------------------
const bike = {name:"R15", color:"black", price:500000}
//destructure oparetor
const {name, color, price} = bike;
// output: R15 black 500000

//----------------------------------------------------------------------
//rest oparetor
function sum(text, ...rest){
    const total = rest.reduce((total, currentValue) => total + currentValue, 0)
    console.log(text, total);
}

sum("The sum is: ", 1, 2, 3, 4, 5);