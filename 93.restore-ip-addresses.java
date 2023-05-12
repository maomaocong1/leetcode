/*
 * @lc app=leetcode id=93 lang=java
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> ips = new ArrayList<>();
        List<String> octets = new ArrayList<>();
        backtrack(s, 0, octets, ips);
        return ips;
    }
    
    private void backtrack(String s, int start, List<String> octets, List<String> ips) {
       if(octets.size()==4 && start==s.length()){
        ips.add(String.join(".",octets));
       }
       for(int size=1;size <=3;size++){
        if(start + size > s.length()){
            break;
        }
        String t  = s.substring(start,start + size);
        if(size>1 && (t.charAt(0) == '0' || Integer.parseInt(t)>255))continue;
        octets.add(t);
        backtrack(s, start+size,octets,ips);
        octets.remove(octets.size()-1);
       }
    }
}
// @lc code=end

