/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l=0;
    var r = x;
    while(l<=r){
        let mid = l + Math.floor((r-l)/2);
        //console.log(mid);
        if(mid * mid === x){
            return mid;
        }else if(mid * mid>x){
            r = mid -1;
        }else{
            l = mid +1 ;
        }
    }
    //console.log(l + " "+ r);
    return r;
    
};
// @lc code=end

