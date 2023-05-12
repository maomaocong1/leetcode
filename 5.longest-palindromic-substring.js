/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max_len =0;
    var max_pos =0;
    for(let i = 0; i < s.length;i++){
        var max1 = helper(i,i,s);
        var max2 = helper(i,i+1,s);
        if(Math.max(max1,max2)>max_len){
            max_pos = i;
            max_len = Math.max(max1,max2);
        }
        

    }
  
    return  s.substring(max_pos-Math.floor((max_len-1)/2),max_pos+Math.floor(max_len/2)+1);
};

var helper= function(a,b,s){

    while(a >=0 && b <s.length&& s.charAt(a)===s.charAt(b)){
        a--;
        b++;
    }
    return b-a-1;

}
// @lc code=end

