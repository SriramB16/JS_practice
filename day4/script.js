// 1.Write a function sumArray that takes an array of numbers and returns the sum of all the numbers.

function sumArray(arr){
    return arr.reduce((total,sum) => total + sum)
}


// 2.Write a function filterEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr){
    return arr.filter(num => {
        if(num%2 === 0){
            return num
        }
    })
}



// 3.Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

function reverseArray(arr){
    return arr.reverse();
}



// 4.Write a function rotateArray that takes an array and a number k, and rotates the array to the right by k steps.

function rotateArray(arr,k){
    let l = arr.length - k
    return arr.slice(l).concat(arr.slice(0,-k))
}


// 5.Write a function removeFalsyValues that takes an array and removes all falsy values (false, null, 0, "", undefined, and NaN).

function removeFalsyValues(arr){
    return arr.filter(Boolean)
}


// 6.Write a function countOccurrences that takes an array and returns an object where the keys are the elements, and the values are the number of occurrences of each element.

function countOccurrences(arr){
    let count ={};
    for(let i = 0; i< arr.length; i++){
        count[arr[i]] = (count[arr[i]] || 0) +1
    }
    return count
}



// 7.Write a function isSorted that checks whether a given array of numbers is sorted in ascending order.

function isSorted(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > (arr[i + 1])){
            return false
        }
    }
    return true
}



// 8.Write a function removeElement that takes an array and a value, and returns a new array with all instances of that value removed.

function removeElement(arr,val){

    let newArr = []
    for(let i = 0; i < arr.length;i++){
        if(arr[i] !== val){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeElement([1, 2, 3, 4, 5, 3], 3) )


// 9.Write a function deepCloneArray that takes a nested array and returns a deep clone (copy) of that array.

function deepCloneArray(arr){
    return arr.map(element => {
        if(Array.isArray(element)){
            return deepCloneArray(element)
        }else{
            return element
        }
    });
}

let original = [1, [2, 3], [4, [5, 6]]];
let clone = deepCloneArray(original); 
original[1][0] = 99;
console.log(clone);
console.log(original) // Output: [1, [2, 3], [4, [5, 6]]]


// 10.Write a recursive function flattenArrayRecursive that takes a deeply nested array and flattens it.

function flattenArrayRecursive(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArrayRecursive(element));
        } else {
            result.push(element);
        }
    });
    return result;
}
