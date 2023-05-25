//Function without parameters:
function sayHello() {
    console.log("Hello!");
  }
  
  sayHello();
  

//Function with parameters:
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Dinesh"); 
  

//Function with a return statement:
function addNumbers(a, b) {
    return a + b;
  }
  
  let sum = addNumbers(5, 3);
  console.log("Sum:", sum); 
  

//Function as a variable:
let sayHi = function() {
    console.log("Hi!");
  };
  
  sayHi(); 


//Arrow function:
let multiply = (a, b) => a * b;

let result = multiply(2, 4);
console.log("Result:", result);

  