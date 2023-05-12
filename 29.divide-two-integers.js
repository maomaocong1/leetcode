/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(a, b) {
    // step1
    let flag=0
    if(b==1) return a;
    if(a<0){ if(b>0) flag = 1 }
    else if(b<0) flag = 1

      
	  
	
	
	// step2 : overflow error handling
    if( a == -2147483648 && b == -1)  return 2147483647
    
	
	
	
	//step3
    let ans = Math.exp(   Math.log(Math.abs(a))  -  Math.log(Math.abs(b))    )
    ans = Math.floor(ans)
    
	
	
	// step4
    if (flag == 1 ) return (ans*-1) // ans = (-ans)
    else return ans
    
};
// @lc code=end

