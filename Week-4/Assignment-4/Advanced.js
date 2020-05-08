

function delayedResultPromise(n1, n2, delayTime) {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(n1+n2);
        },delayTime)
    })
    }
    delayedResultPromise(4, 5 , 3000).then(console.log) // 9 (4+5) will be shown in the console after 3 seconds


// function 用await 抓promise 一定要宣告為 async function
// async/await 是方便簡寫promise的方式

async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    let result = await delayedResultPromise(-5, 10 , 2000);
    console.log(result);
    }
    main() // result will be shown in the console after <delayTime> seconds


    