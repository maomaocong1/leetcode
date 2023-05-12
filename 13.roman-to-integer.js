/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum = 0;
    var mp = new Map();
    mp.set("I",1);
    mp.set("V",5);
    mp.set("X",10);
    mp.set("L",50);
    mp.set("C",100);
    mp.set("D",500);
    mp.set("M",1000);
 
    for(let i =0; i<s.length; i++){
        let num = mp.get(s.charAt(s.length-1-i));
        if(4*num < sum) {
            sum -=num;
        }
        else{
            sum += num;
        }

    }
    return sum;
    
};
// @lc code=end

