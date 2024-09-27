// 1.Write a function removeDuplicates that takes an array of numbers and returns a new array with duplicates removed.

function removeDuplicates(arr){
    let result = [];
    for (let num of arr){
        if(!result.includes(num)) {
            result.push(num);
        }
    }
    return result
}

// console.log(removeDuplicates([2,5,4,5,1,3,8,2,1]))

// 2.Write a function squareArray that takes an array of numbers and returns a new array with the square of each number.

function squareArray(arr){
    return arr.map(num => Math.pow(num,2))
}

// console.log(squareArray([2,4,5,6,7]))

// 3.Write a function convertHoursToMinutes that takes a number of hours and converts it to minutes.

function convertHoursToMinutes(hours){
    return hours * 60;
}

// console.log(convertHoursToMinutes(3))

// 4.Write a function findSecondLargest that takes an array of numbers and returns the second largest number.

function findSecondLargest(arr){
    let first = -Infinity;
    let second = -Infinity;

    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        }else if(num > second && num !== first){
            second = num;
        }
    }
    return second;
}


// 5. Write a function flattenArray that takes a nested array and flattens it into a single-level array.

function flattenArr(arr){
    let result =[];
    for(let i = 0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArr(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}


// 6.Write a function capitalizeWords that takes a string and returns it with each word capitalized.

function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// console.log(capitalizeWords('this is sriram'))

// 7. Write a function longestWord that takes a string and returns the longest word in the sentence.

function longestWord(str){
    let words = str.split(' ');
    let maxlength = 0;
    let result = '';

    for(let i = 0; i<words.length;i++){
        if(words[i].length > maxlength){
            maxlength = words[i].length;
            result = words[i]
        }
    }
    return result
}


// 8. Write a function findMissingNumber that takes an array of numbers in a range (e.g., 1 to 100) and returns the missing number.

function missingNumber(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let total = ((max - min +1) * (max + min))/2
    let sub = arr.reduce((total,sum) => total = total + sum) 
    return total - sub
}

console.log(missingNumber([12,13,14,16,17,18]))


// 9.Write a function isAnagram that checks whether two given strings are anagrams (contain the same letters in a different order).

function isAnagram(str1, str2) {
    let cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    let charCount = {};

    for (let char of cleanStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }


    for (let char of cleanStr2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return Object.values(charCount).every(count => count === 0);
}


// 10. Write a function binarySearch that implements the binary search algorithm to find a target value in a sorted array.

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length -1;

    while(left<= right){
        let mid = Math.floor((left +right)/2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] <= target){
            left = mid +1;
        } else{
            right = mid -1;
        }
    }
    return -1;
}
