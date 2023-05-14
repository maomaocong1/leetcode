#
# @lc app=leetcode id=130 lang=python3
#
# [130] Surrounded Regions
#

# @lc code=start
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])
        
        def dfs(sv):
            row,col = sv[0],sv[1]
            board[row][col]='Y'
            for r,c in [(row,col+1),(row,col-1),(row+1,col),(row-1,col)]:
                if 0<=r<m and 0<=c<n and board[r][c] == "O":
                    board[row][col]='Y'
                    dfs((r,c))
        
        for i in range(m):
            for j in range(n):
                if i==0 or i==m-1 or j==0 or j==n-1:
                    if board[i][j]=='O':
                        dfs((i,j))
        for i in range(m):
            for j in range(n):
                if board[i][j]=='O':
                    board[i][j]='X'
                elif board[i][j]=='Y':
                    board[i][j]='O'
                    
                    
            
# @lc code=end

