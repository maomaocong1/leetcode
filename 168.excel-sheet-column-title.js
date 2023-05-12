/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // Create an empty string for storing the characters...
    let output = "";
    // Run a while loop while columnNumber is positive...
    while (columnNumber > 0) {
        // Subtract 1 from columnNumber and get current character by doing modulo of columnNumber by 26...
        output = String.fromCharCode('A'.charCodeAt(0) + (columnNumber - 1) % 26) + output;
        // Divide columnNumber by 26...
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    // Return the output string.
    return output;
    
};
// @lc code=end

