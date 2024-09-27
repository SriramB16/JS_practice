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

console.log(removeDuplicates([2,5,4,5,1,3,8,2,1]))