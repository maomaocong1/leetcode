/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var sta = [];
    var map = new Map();
    map.set('(',')');
    map.set('[',']');
    map.set('{','}');

    for(let i = 0; i <s.length;i++){
        let sysbol = s.charAt(i);
        if(sysbol == '(' || sysbol == '[' || sysbol == '{'){
            sta.push(sysbol);
        }else{
            if (sta.length == 0){
                return false;
            }else{
                if(sysbol == map.get((sta.pop()))){
                    continue;
                }else{
                    return false;
                }
            }
        }
    }

    return sta.length ===0;
};
// @lc code=end

