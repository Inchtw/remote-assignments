// 方法一 用setTimeout(function[, delay, arg1, arg2, ...]); 塞到後面的para
function delayedResult(n1, n2, delayTime, callback) {
    const result = n1 +n2;
    setTimeout(callback,delayTime,result); 
//  setTimeout(callback,delayTime, n1+n2); 最快  

    }
delayedResult(4, 5, 3000, function(result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function(result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

//方法二  因setTimeout內一定要是沒有arg的 callback function  不能寫callback(result)
// 給他一個含值的annouymous function 

function delayedResult2(n1, n2, delayTime, callback) {
    let result = n1 + n2;
    return setTimeout(() => {callback(result)}, delayTime);
}
delayedResult2(4, 5, 3000, function(result) {
    console.log(result);
}); 
delayedResult2(-5, 10, 2000, function(result) {
    console.log(result);
}); 

//方法三 再簡化

function delayedResult3(n1, n2, delayTime, callback) {
    setTimeout(() => {
      const result = n1 + n2;
      callback(result);
    }, delayTime);
  }
  delayedResult3(4, 5, 3000, function (result) {
    console.log(result);
  }); 
  delayedResult3(-5, 10, 2000, function (result) {
    console.log(result);
  });