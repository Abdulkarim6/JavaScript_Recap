const fruitsSet1 = ["apple", "banana", "mango"];

const res1 = fruitsSet1.find((f) => { if (f === "banana") { return true } });
//output: banana

const res2 = fruitsSet1.map((f) => `${f}-`);
//output: ['apple-', 'banana-', 'mango-']

const res3 = fruitsSet1.filter((f) => { if (f === "banana" || f === "mango") { return true } });
//output(new array): ['banana', 'mango']

const fruitsSet2 = ["apple", "banana", "mango"];
const newFruits = ["orange", "Malta"];

const res4 = fruitsSet2.concat(newFruits);
//output(new array): ['apple', 'banana', 'mango', 'orange', 'Malta']

const res5 = fruitsSet2.slice(1,2)
//output: ['banana']

// The "splice" method return the array of removed item and it changes the original array
const res6 = fruitsSet2.splice(1,2, "pineapple", "litchi")
//output: ['banana', 'mango']

const numbersSet1 = [1,2,3,4,5];
const res7 = numbersSet1.reduce((total, currentItem) => total+currentItem, 0);
//output: 15
//---------------------------------------------------------------------------------
const fruitsSet3 = ["apple", "banana", "mango"];

fruitsSet3.forEach((item) =>{
    //travers the array
    //console.log(item);
});

for(let fruit of fruitsSet3){
    //travers the array to access the elements
   // console.log(fruit);
}