//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const data = [];

  const go = (node) => {
    if (node === null) {
      data.push("null");
      return;
    }
    data.push(node.val);
    go(node.left);
    go(node.right);
  };
  go(root);
  // deserialize(data.join(','))
  return data.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(",");

  const go = () => {
    if (data.length === 0) return;
    let value = data.shift();
    if (value === "null") return null;
    let node = new TreeNode(value);
    node.left = go();
    node.right = go();
    return node;
  };

  return go();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
