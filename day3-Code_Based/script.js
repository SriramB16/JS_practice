// 1.Write a function that takes an array and returns the first element.

function firstElemnt(arr){
    return arr[0];
}


// 2.Write a function that returns the length of an array.

function lenOfArr(arr){
    return arr.length
}


// 3.Create an object representing a book with properties: title, author, and year. Log the object.

const book ={
    title : 'harry potter',
    author : 'J.K. Rowling',
    year : 2011,
}

console.log(book)

//  4. Write a function that accepts an array of numbers and returns the largest number. 

function arrAccept(arr){
    return Math.max(...arr)
}


// 5. Write a function that removes duplicates from an array. 

function removeDuplicate(arr){
    let uniArr = [];

    for(const num of arr){
        if(!uniArr.includes(num)){
            uniArr.push(num);
        }
    }
    return uniArr;
}

// alternate way

function removeDupAlternate(arr){
    return [...new Set(arr)]
}

console.log(removeDupAlternate([1,2,3,5,7,8,4,3,2]))


//  6. Create a function that merges two arrays into one.

function mergeArr(arr1,arr2){
    return arr1.concat(arr2)
}

console.log(mergeArr([1,2,3],[4,5,6]))

//  7. Write a function that sorts an array of numbers in ascending order. 

function ascendSort(arr){
    return arr.sort((a,b) => a- b)
}

console.log(ascendSort([40, 1, 5, 200]))

// 8. Create an object representing a student with properties: name, age, and scores (an array of numbers). Write a function that returns the average score of the student.

const student = {
    name : 'sri',
    age : 25,
    score : [ 90,95,80,85 ]
}

function avgScore(arr){
    return arr.reduce((total,sum) => 
        total = total +sum
)/arr.length
}

console.log(avgScore(student.score))

// 9. Write a function that flattens a nested array (e.g., [[1, 2], [3, 4]] should become [1, 2, 3, 4])

function flattenArr(arr){
    let flatArr = [];

    for(const item of arr){
        if(Array.isArray(item)){
             flatArr = flatArr.concat(flattenArr(item))
        }else {
             flatArr.push(item)
        }
    }
    return flatArr
}

console.log(flattenArr([[1, 2], [3, 4]]))

// 10. Create a function that deeply clones a nested object.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }
    
    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); // Recursively copy for nested objects
        }
    }

    return clone;
}
