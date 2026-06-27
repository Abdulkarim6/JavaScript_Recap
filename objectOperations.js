const std1 = {
    name:"Karim",
    age:25,
    dpt:"CSE"
};

for(let key in std1){
    //console.log(key,": ", std1[key]);
}

const keys = Object.keys(std1);
// output: ["name", "age", "dpt"];

const values = Object.values(std1);
// output:  ['Karim', 25, 'CSE'];

const pair = Object.entries(std1);
// output: [2) [['name', 'Karim'],  ['age', 25],  ['dpt', 'CSE']];

std1["roll"] = "10023";
//output: {name: 'Karim', age: 25, dpt: 'CSE', roll: '10023'}

console.log(pair);
