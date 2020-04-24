// Assignment 1: Function and Array
// Complete the following functions
// 1. max: find the max value of an array of numbers
// 2. findPosition: find the first position of the target number inside an array of numbers. The
// position should be counted starting from 0, if you can't find the target, please return -1
// Reminder: you cannot use those built-in functions like Math.max() and
// Array.prototype.findIndex() to complete this assignment, please implement it by yourself.

function max(numbers) {
    let max_num=0;
    for (let i =0; i<numbers.length ;i++){
        if (max_num < numbers[i]){
            max_num = numbers[i];
        }
    }
    return max_num;
}

/*  設posi 如果跟target一樣就直接return i  */
/*  用boolean   特性 沒有null = false !false =true 會執行 */
function findPosition(numbers, target) {
    let posi;
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]==target){
            return posi = i;
        }
        }
    if(!posi){
       return posi = -1;
    }
    }

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1