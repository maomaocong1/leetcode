/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var tr = [];
    tr.push([1]);

    for (let i = 1; i < numRows; i++) {
        var row = [];
        var prevRow = tr[i - 1];

        // The first row element is always 1.
        row.push(1);

        // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.
        for (let j = 1; j < i; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        // The last row element is always 1.
        row.push(1);

        tr.push(row);
    }
    return tr;
    
};
// @lc code=end

