/**Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself */
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
