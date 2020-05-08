

function binarySearchPosition(numbers, target) {
    let len =numbers.length;
    let start = numbers[0];
    let end = numbers[len-1];
    let middle = parseInt((numbers.length / 2)) ;
    let mid = numbers[middle] ;
    let new_smaller_numbers=[];
    let new_bigger_numbers=[];

        if(target === start){
            return 0;
        }else if(target === mid){
            return middle;
        }else if(target === end){
            return len-1;
        }else if(target<mid){
            for(let i =0; i<=middle ; i++){
                new_smaller_numbers[i]=numbers[i] ;
            }
            return binarySearchPosition(new_smaller_numbers, target)
        }else if(target>mid){
            for(let i =middle; i <= len ; i++){
                new_bigger_numbers[i]=numbers[i] ;
            }
            return binarySearchPosition(new_bigger_numbers, target)
        }
    }


function binarySearchPosition2(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
      
        while (left <= right) {
          let mid = parseInt((left + right) / 2);
          if (target === numbers[mid]) {
            return mid;
          } else if (target > numbers[mid]) {
            left = mid + 1;
          } else if (target < numbers[mid]) {
            right = mid - 1;
          }
        }
      
        return -1;
      
      }


    
    console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
    console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
    console.log( binarySearchPosition2([1, 2, 5, 6, 7, 9], 5) ); // should print 2