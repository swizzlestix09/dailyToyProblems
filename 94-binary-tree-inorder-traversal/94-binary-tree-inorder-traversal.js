/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = []
    let solution = []
    
    while( root  || stack.length) {
        if(root) {
            stack.push(root)
            root = root.left
            //console.log( 'stack: ', stack, 'root: ', root)
        } else {
            root = stack.pop()
            solution.push(root.val)
            root = root.right
            //console.log( 'stack: ', stack, 'sol: ', solution, 'root: ', root)
        }
    }

    return solution
};