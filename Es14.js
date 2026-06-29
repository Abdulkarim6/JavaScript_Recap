const numbers = [1,2,3,4,5];

const reversedNumbers = numbers.toReversed();
//output: [5, 4, 3, 2, 1]; // reversed immutably

const splicedNumbers = numbers.toSpliced(2, 1, 6);
//output: [1, 2, 6, 4, 5]; // spliced immutably

const res = numbers.with(2, 3);
//output: [1, 2, 3, 4, 5]; // done with immutably
//----------------------------------------------------------------------

// Sorted Immutably
const employees = [
    {
        name:"Tarek",
        salary:30000
    },
    {
        name:"Kamal",
        salary:50000
    },
    {
        name:"Mallo",
        salary:40000
    }
]

const salaryBasedSort = employees.toSorted(function(a,b){
     return a.salary - b.salary;
})

const nameBasedSort = employees.toSorted(function(a,b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    // if (x < y) { return -1; }
    // if (x > y) { return 1; }
    // return 0;

    // Or update version
    return a.name.localeCompare(b.name);

});
console.log(nameBasedSort);