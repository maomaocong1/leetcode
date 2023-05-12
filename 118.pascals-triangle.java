/*
 * @lc app=leetcode id=118 lang=java
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> tr = new ArrayList<List<Integer>>();
        tr.add(new ArrayList<>());
        tr.get(0).add(1);
        

        for (int i = 1 ; i < numRows;i++){
            List<Integer> row = new ArrayList<>();
            List<Integer> prerow = tr.get(i-1);
// The first row element is always 1.
        row.add(1);

        // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.
        for (int j = 1; j < i; j++) {
            row.add(prerow.get(j-1) + prerow.get(j));
        }

        // The last row element is always 1.
        row.add(1);

        tr.add(row);
        }
        return tr;
    }
}
// @lc code=end

