// 1.Write a function that returns the sum of three numbers.

function add(n1,n2,n3){
    return n1+n2+n3;
}

// 2.Create a function that squares a number.

function square(n){
    return n * n
}

// 3.Write a function to return the larger of two numbers

function largest(n1,n2){
    return n1>n2 ? n1 : n2
}

//  4. Write a function that accepts an array of numbers and returns the sum.

function sumOfArr(...args){
    return args.reduce((total,sum )=> total+sum )
}

//  5. Create a function that accepts a string and returns the count of vowels in it.

// already done in day2

//  6. Write a program that simulates a dice roll (returns a random number between 1 and 6).

function dice(){
    return Math.floor(Math.random() * 6)+ 1;
}


// 7. Write a function that accepts a number and returns whether it's prime or not.

function primeNum(n){
    if(n<=1){
        return `${n} not a prime number`
    }

    for(let i = 2 ; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return 'not a prime number'
        }
    }
    return `${n} is a prime number`;
}

//  8. Implement a function that converts minutes to hours and minutes.

function convert(min){
    return min * 60;
}


// 9. Write a recursive function to calculate the factorial of a number. 

function factorial(n){
    if (n === 0) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
}

// 10. Implement a closure to create a counter function that increments by 1 each time it’s called.

function closure(){
    let counter = 0;
    function increments(){
        counter++;
        console.log(counter);
    }
    return increments;
 
}

const counterFunc = closure();
counterFunc()
