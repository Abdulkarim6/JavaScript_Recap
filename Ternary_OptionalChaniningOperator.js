//Ternary operator: condition ? true : false;
const a = 5;
const b = 5;

const result = a !== b ? true : (a % 2 === 0 ? "Even" : "Odd");
//output: odd
console.log(result);
//-----------------------------------------------------------------

//optional chaining: if_truthy?.if_truthy?.if_truthy
const std = {
    name:"karim",
    roll:10023,
    courses : {
        course1 : "CSE281",
        course2: "MAT241"
    }
}
//output: CSE281
console.log(std?.courses?.course1);