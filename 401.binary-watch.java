/*
 * @lc app=leetcode id=401 lang=java
 *
 * [401] Binary Watch
 */

// @lc code=start
class Solution {
    public List<String> readBinaryWatch(int turnedOn) {
        if(turnedOn >=9) return new ArrayList();
        Map<Integer,List<String>> hour = new HashMap<Integer,List<String>>();
        hour.put(0,new ArrayList<String>());
        Map<Integer,List<String>> minus = new HashMap<Integer,List<String>>();
        minus.put(0,new ArrayList<String>());
        for(int i = 0; i <12;i++){
            int value = Integer.bitCount(i);
            if(hour.containsKey(value)){
                List<String> tmp = hour.get(value);
                tmp.add(String.format("%d",i));
                hour.put(value,tmp);
            }else{
                List<String> tmp =new ArrayList<String>(0);
                tmp.add(String.format("%d", i));
                hour.put(value,tmp);
            }
            
        }

        for(int i = 0; i <60;i++){
            int value = Integer.bitCount(i);
            if(minus.containsKey(value)){
                List<String> tmp = minus.get(value);
                tmp.add(String.format("%02d",i));
                minus.put(value,tmp);
            }else{
                List<String> tmp =new ArrayList<String>(0);
                tmp.add(String.format("%02d",i));
                minus.put(value,tmp);
            }
            
        }
        //System.out.println(hour);
        //System.out.println(minus);
        List<String> res = new ArrayList<String>();
        
        for(int h=0; h< hour.size();h++){
            //List<String> res = new ArrayList<String>();
            if(h> turnedOn) break;
            int m = turnedOn - h;
            if(m > 5) continue;

            for(String t1 : hour.get(h)){
                for(String t2:minus.get(m)){
                    res.add(t1+":"+t2);
                }
            }
            
        }
        
        return res;

        






        
    }
}
// @lc code=end

