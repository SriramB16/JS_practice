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

// console.log(temperature(50))

// 8. Write a function that accepts a string and returns it reversed.

function reverseString(str) {
    let strLength = str.length;
    let reversedStr = "";
    for (let i = strLength - 1; i >= 0; i--) {
        reversedStr += str[i];
        }
        return reversedStr
}

//  9. Write a function that determines whether a given year is a leap year. 

function leapyear(y){
if(y%4 === 0 && (y%100 !== 0 || y%400 === 0)) {
    return "Its a leap year";
} else {
    return "Not a leap year"
}
}

console.log(leapyear(1700))

//  10. Implement a calculator function that can handle addition, subtraction, multiplication, and division based on a passed operator.

function calculator(num1,operator,num2){
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 !== 0){
                return num1 / num2;
            }else {
                return "Error: Division by zero is not allowed"
            }
    
        default:
            return "Invalid operator"
    }
}

console.log(calculator(3,"+", 3))

console.log(Math.abs(3))