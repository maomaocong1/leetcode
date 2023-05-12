/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var tr = [];
    tr.push([1]);

    for(let i = 1; i < rowIndex+1; i++) {
        let row = [];
        let prerow = tr[i-1];
        row.push(1);
        for(let j = 1; j < prerow.length; j++) {
            row.push(prerow[j-1]+ prerow[j]);
        }
        row.push(1);
        tr.push(row);
    }
    //console.log(tr);
    return tr[rowIndex];
};
// @lc code=end

