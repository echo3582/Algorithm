/**
 * @description 构造一个二叉树 [3, 9, 20, null, null, 15, 7]
 * @param {*} val 
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const root = new TreeNode(3)
const leftOfRoot = root.left = new TreeNode(9)
const rightOfRoot = root.right = new TreeNode(20)
const leftOfRight = rightOfRoot.left = new TreeNode(15)
const rightOfRight = rightOfRoot.right = new TreeNode(7)