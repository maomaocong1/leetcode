/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = 1;
    var max = Math.floor((2**31 -1)/10);
    if(x < 0) {
        sign=-1;
        x=-x;
    }
    let sum=0;
    let digit = 0;
    while(x>=1){
     digit = x % 10;
     x = Math.floor(x/10);
     //console.log(x);
     if(sum > max || (sum===max && digit >7 && sign === 1)){
        sum = 0;
     }else if(sum > max || (sum==max && digit >9 && sign === -1)){
        sum = 2**31 * (-1);
     }else{
        sum = sum*10 + digit;
     }
    }
   return sign * sum;


};
// @lc code=end

