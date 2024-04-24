#
# @lc app=leetcode id=133 lang=python3
#
# [133] Clone Graph
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    mp = {}
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return None
        if node in self.mp:
            return self.mp[node]
        newNode = Node(node.val)
        self.mp[node] = newNode
        for n in node.neighbors:
            newNode.neighbors.append(self.cloneGraph(n))
        return newNode
        
# @lc code=end

