var MedianFinder = function () {
  this.array = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let ary = this.array;
  for (let n = 0; n < ary.length; n++) {
    if (ary[n] > num) {
      return ary.splice(n, 0, num); //array.splice(index, howmany, item1, ....., itemX) add the element
    }
  }
  ary.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.array.length;
  if (len % 2 != 0) return this.array[Math.floor(len / 2)];
  return (this.array[len / 2] + this.array[len / 2 - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
