// 1.Write a program that prints "Hello, World!" to the console.

console.log("Hello, World!")

// 2.Create a variable, assign a number to it, and log its value.

var num = 8;
console.log(num);

// 3.Create a function that adds two numbers and returns the result.

function addNum(n1,n2){
    return n1 + n2;
}

// console.log(addNum(2,3));

// 4. Write a function to check if a number is even or odd.

function check(n){
    return n%2 === 0 ? 'even' : 'odd';
}

// 5. Create a function that multiplies two numbers without using the * operator.

function multiply(n1,n2){
    return n1/(1/n2);
}

// console.log(multiply(2,3))

// 6. Write a program that calculates the area of a circle. 

function circleArea(r){
    return 3.14 * Math.pow(r,2);
}


// 7. Convert a temperature from Fahrenheit to Celsius

function temperature(f){
    return (f - 32) * 5/9
}

console.log(temperature(50))