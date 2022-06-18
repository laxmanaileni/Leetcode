//Implementation of Stacks using Map

var FreqStack = function () {
  arr = [];
  obj = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  obj[val] = ++obj[val] || 1;
  if (!arr[obj[val]]) arr[obj[val]] = [];
  arr[obj[val]].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let ret = arr[arr.length - 1].pop();
  if (!arr[arr.length - 1].length) arr.pop();
  obj[ret]--;
  return ret;
};
