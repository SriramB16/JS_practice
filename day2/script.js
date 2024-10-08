//1. Write a function greet that accepts a name and returns a greeting message (e.g., greet("John") should return "Hello, John!").

function greet(name){
    return `Hello, ${name}`
}


//2. Create a function isOdd that takes a number as input and returns true if it's odd, and false otherwise.

function isOdd(num){
    return num % 2 !== 0
}

//3. Write a function doubleArray that takes an array of numbers and returns a new array where each number is doubled.

function doubleArray(arr){
   return arr.map(item => item * 2)
}

// 4. Write a function countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in it.

function countVowels(text){
    const vowels = 'aeiou';
    let count = 0;
    for(let i=0; i < text.length ; i++){
        if(vowels.includes(text[i].toLowerCase())){
            count++;
            
        }
    }
    // console.log(count);
    return count
}

// console.log(countVowels("this is new text"))

// 5. Implement a function getFullName that accepts two parameters: first name and last name, and returns the full name in the format "First Last".

function getFullName(fName,lName){
    return `${fName} ${lName}`
}

// console.log(getFullName("sri","ram"))

// 6. Create a function sumOfSquares that takes an array of numbers and returns the sum of their squares.

function sumOfSquares(arr){
    let updatedArr = arr.map(num => Math.pow(num,2));

    return updatedArr.reduce((total,val) => total += val)
}

// console.log(sumOfSquares([1,2,3,4]))

// 7. Write a function isPalindrome that checks if a given string is a palindrome (a word that reads the same backward as forward).

function isPalindrome(str) {
    let normalizedText = str.toLowerCase();

    let left = 0;
    let right = normalizedText.length -1;
    
    while( left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left ++;
        right--;
    }
    return true
}

// console.log(isPalindrome('level'))

// 8. Write a function getUnique that takes an array and returns a new array with only the unique elements 

function getUnique(arr){
    let uniqueArr =[];

    for(let i = 0; i<arr.length ; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// console.log(getUnique([1,2,3,1,2,5]))

//9.  Implement a function nestedSum that takes an array of arrays of numbers (e.g., [[1, 2, 3], [4, 5], [6]]) and returns the total sum of all numbers.

function nestedSum(arr){
    let sum = arr.map(nestArr => nestArr.reduce((total,sum) => total+= sum,0))
    let totalSum = sum.reduce((total,sum) => total+=sum,0);
    return totalSum
}

console.log(nestedSum([[1, 2, 3], [4, 5], [6]]))


// 10. Write a function memoize that takes a function as input and returns a memoized version of it (i.e., a version that caches the results of function calls and reuses them when the same inputs occur).

function memoize(fn){
    let cache ={}

    return function(...args){
        let key = JSON.stringify(args);

        if(cache[key]){
            console.log("Fetching from cache:", key);
            return cache[key];
        }else {
            console.log("Calculating result:", key);
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function addNum(...args){
    return args.reduce((total,sum) => total + sum,0)
}


let memoizeAdd = memoize(addNum);
