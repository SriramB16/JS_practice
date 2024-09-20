// 1.Write a function isEven that takes an integer as input and returns true if the number is even, and false otherwise.

function isEven (num) {
    if(num%2 === 0) {
        return true
    } else {
        return false
    }
}

// 2. Create a function convertMinutesToSeconds that converts minutes into seconds. (e.g., convertMinutesToSeconds(5) should return 300).


function convertMinutesToSeconds(num) {
    return num * 60
}

// 3.Write a function addTwoNumbers that accepts two numbers as parameters and returns their sum.

function addTwoNumbers(num1,num2) {
    return num1+ num2;
}

//  4. Write a function getLargest that takes three numbers as input and returns the largest.

function getLargets(num1,num2,num3) {
    return Math.max(num1,num2,num3);

    // if(num1 > num2 && num1 > num3){
    //     return num1;
    // } else if (num2  > num1 && num2 > num3) {
    //     return num2;
    // }else {
    //     return num3;
    // }
}

// 5. Implement a function capitalize that takes a string and returns it with the first letter of each word capitalized. (e.g., "hello world" becomes "Hello World").

function capitalize(text) {
    let sText = text.split(' ');
    console.log(sText);
    for(let i = 0; i<sText.length; i++) {
        sText[i] =  sText[i].charAt(0).toUpperCase() +sText[i].slice(1)
    }

    // let mText = sText.map((item)=> {item.charAt(0).toUpperCase() + item.slice(1)})
    return sText.join(' ');
    console.log(sText)
}

// 6. Write a function findAverage that takes an array of numbers and returns their average. 

function findAverage(arr) {
    let sum = arr.reduce((total, value) =>  total + value);
    return sum / arr.length;
    
}

// 7. Create a function reverseString that takes a string and returns the string in reverse. (e.g., "hello" becomes "olleh").

function reverseString(text) {
    return text.split('').reverse().join('')
}

//  console.log(reverseString('hellooo'))  

// 8. Write a function factorial that returns the factorial of a given number using a loop.

function factorial(num){
    let result = 1;
    for(let i = num; i>0; i--) {
        result = result * i;
    }
    return result
}


// 9. Implement a function fizzBuzz that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n){
    for (let i = 1; i <= n; i++){
        if(i%3 === 0 && i %5 ===0){
            console.log("FizzBuzz");
        }else if (i%3 === 0 ){
            console.log("Fizz");
        }else if(i%5 === 0) {
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}

// fizzBuzz(15)

// 10. Write a function primeFactors that takes an integer and returns an array of its prime factors.
function factorial(n) {
    let result = [];

    while(n%2 === 0) {
        result.push(2);
        n = n/2;
    }
    for( i = 3 ; i <= Math.sqrt(n); i+=2) {
        while(n%i === 0 ) {
            result.push(i);
            n = n/i;
        } 
    }
    if(n > 2) {
        result.push(n);
    }

    return result;
}


console.log(factorial(36))