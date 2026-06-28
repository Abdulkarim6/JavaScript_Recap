const numbers = [1,2,3,4,5,6];
const mySet = new Set(numbers);
const set2 = new Set([2,3,4]);

mySet.add("6"); //added 6 as string to the set

mySet.delete(2); //removed 2 from the set

//mySet.clear(); //clear all elements from the set

mySet.has(3); //Checks the value exists or not, return boolean

const union = mySet.union(set2); //output: {1, 3, 4, 5, '6', 2}

const intersect = mySet.intersection(set2); //output: {3, 4}

const difference = mySet.difference(set2); //output: (mySet - set2) {1, 5, 6, '6'}

console.log(mySet);