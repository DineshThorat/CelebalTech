// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
  }
  

// // While Loop
var i = 1;
while (i <= 5) {
  console.log("Iteration:", i);
  i++;  
}


// Do-While Loop
var i = 1;
do {
  console.log("Iteration:", i);
  i++;
} while (i <= 5);



// For...in Loop
const person = {
    name: "Dinesh",
    age: 20,
    isStudent: true
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }


// For...of Loop
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {  //of li jagah in print index of array
  console.log("Number:", number);
}

  
let arr = [1,2,3,4,5,6]

arr.forEach(item,index,array)=>{
  console.log(item,index)
}

const newArray = arr.map((item) =>{
  return item*2
})
console.log(newArray);