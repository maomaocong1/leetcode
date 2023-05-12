/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var mp = new Map();
    var str = n.toString(10);
    var sum = 0;
    while(true){
        //console.log(str);
        if(!mp.has(str))
        {
        for(let i = 0; i < str.length; i++) {
           // console.log("str =="+str[i]);

            sum += parseInt(str[i])*parseInt(str[i]);
        }
       // console.log(sum);
        if(sum == 1){
            return true;
        }
        }
        else{
            return false;
        }
        mp.set(str,0);
        str = sum.toString();
        sum = 0;
    }
    
};
// @lc code=end

