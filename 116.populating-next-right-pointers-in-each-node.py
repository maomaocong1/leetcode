#
# @lc app=leetcode id=116 lang=python3
#
# [116] Populating Next Right Pointers in Each Node
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        hmap = defaultdict(list)
        def dfs(node,h):
            if( node == None ):
                return
            else:
                hmap[h].append(node)
                dfs(node.left,h+1)
                dfs(node.right,h+1)
        
        dfs(root,0)
        for key in hmap.keys():
            for i in range(0, len(hmap[key])-1 ):
                hmap[key][i].next = hmap[key][i+1]
            hmap[key][-1].next = None
        return root
# @lc code=end

