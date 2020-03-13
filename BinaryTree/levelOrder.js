/**
 * @description 二叉树层序遍历 利用队列（数组队列方法：push shift）
 * @param {*} root 
 */

function levelOrder(root) {
  let result = []
  let queue = [root]
  while(root && queue.length !== 0) {
    let node = queue.shift()
    result.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return result
}

console.log(levelOrder(root));
console.log(levelOrder(null))
