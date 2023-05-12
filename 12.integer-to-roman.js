/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        let ch = num[i];
        let n = 0;
        let sum=0;
        switch (ch) {
            case 'I':
                n = 1;
                break;
            case 'V':
                n = 5;
                break;
            case 'X':
                n = 10;
                break;
            case 'L':
                n = 50;
                break;
            case 'C':
                n = 100;
                break;
            case 'D':
                n = 500;
                break;
            case 'M':
                n = 1000;
                break;

        }
        if(4*n>sum){sum-=n;}
        else{
            sum+=n;
        }
        
    }
    return sum;
};
// @lc code=end

