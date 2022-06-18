var MyHashSet = function () {};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this[key] = null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hasOwnProperty(key);
};

class MyHashSet {
  constructor() {
    this.hash = new Array(1000001).fill(false);
  }
  add(key) {
    this.hash[key] = true;
  }
  remove(key) {
    this.hash[key] = false;
  }
  contains(key) {
    return this.hash[key];
  }
}
