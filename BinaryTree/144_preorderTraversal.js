/**
 * leetcode第144题
 * 给定一个二叉树，返回它的 前序 遍历。

 示例:

  输入: [1,null,2,3]  
    1
      \
      2
      /
    3 

  输出: [1,2,3]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * @description 递归法前序遍历
 * @param {TreeNode} root 
 * 
 * 注意：
 * 1.result 全局变量
 * 2.helper 辅助函数
 */
function preorderTraversal(root) {
  let result = []
  return helper(root, result)
}

function helper(root, result) {
  if (!root) {
    return []
  }
  result.push(root.val)
  helper(root.left)
  helper(root.right)
  return result
}

/**
 * @description 迭代法前序遍历（利用栈，栈先进后出，所以先压右孩子再压左孩子）
 * @param {TreeNode} root 
 */
function preorderTraversal2(root) {
  if (!root) {
    return []
  }
  let result = []
  let stack = [root]
  while(stack.length) {
    let node = stack.pop()
    result.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return result
}
