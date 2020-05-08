// 1.What’s the time complexity means? a way showing how the run time of a function increase 
// 這個function隨著資料給越多 執行時間增加的趨勢是如何呢 

//
// 4.What is the time complexity of the binary search Algorithm we wrote in last week and
// Why? (If you have finished that part before)


// 暴力方法 for loop 
//2.What’s the time complexity of your solutions?
//             Time Complexity    for in for = O(n^2)

function twoSum(nums, target) {
    for( let i = 0; i<nums.length;i++){
        for( let j = 1; j<nums.length; j++){
            if (nums[i]+nums[j] == target){
                return console.log([i,j])
            }
        }
    }

    }
twoSum([2, 7, 11, 15], 9);


// fix complexity O(n^2) ---> O(n)

function twoSum2(nums, target) {
    const first_check = [];
    for(let i =0; i<nums.length;i++){
        const now_check = nums[i];
        const need_value = target - now_check;
        index1 = first_check[need_value];
        if(index1 != null){
            console.log([index1 ,i])
        }else{
            //把差值作為[]的index i 作為該index的值都存起來
            first_check[now_check]=i;
        }
        console.log(first_check);
    }

    }


twoSum2([2, 7, 11, 15], 9);

// 用map方法

function twoSum3(nums, target) {
    const map = new Map();
    for(let i =0; i<nums.length;i++){
        let now_check =nums[i];
        if (map.has(now_check)){
            console.log([ map.get(now_check) , i] )
        }else{
            let wanted = target -nums[i];
            //把差值跟自己的id 都存下來 mapcheck有中的就可以結束loop了 
            map.set(wanted , i);
        }
    }
    console.log(map)
}


twoSum3([2, 7, 11, 15], 9);


