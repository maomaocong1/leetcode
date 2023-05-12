/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min_price = Number.MAX_SAFE_INTEGER;
    var max_pro = 0;
    for(let i = 0; i < prices.length; i++) {
        if(min_price > prices[i]) {min_price = prices[i];}
        else if (prices[i] - min_price > max_pro) {
            max_pro = prices[i] - min_price;
        }
    }
    return max_pro;
};
// @lc code=end

