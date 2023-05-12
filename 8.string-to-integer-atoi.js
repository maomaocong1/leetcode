/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = 1; 
    let result = 0; 
    let index = 0;
    
    s = s.trim();
   
    if (s.length === 0) return 0;
    
    if (s.charAt(0) === '+') {
        sign = 1;
        s = s.substring(1);
    } else if (s.charAt(0) === '-') {
        sign = -1;
        s = s.substring(1);
    }
    
    let n = s.length;
    console.log(s);
    if (n === 0) return 0;
    
    while (index < n && !isNaN(parseInt(s.charAt(index)))) {
        let digit = parseInt(s.charAt(index));
        
        if ((result > Math.floor((2**31-1)/10)) || 
            (result === Math.floor((2**31-1)/10)) && digit > 7) {
            return sign === 1 ? 2**31 -1 : (-1)* 2**31;
        }
        
        result = 10 * result + digit;
        index++;
    }
    
    return sign * result;
};
// @lc code=end

