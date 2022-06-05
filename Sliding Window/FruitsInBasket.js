const FruitsInBasket = (Fruit) => {
  let maxLen = 0,
    start = 0;
  let map = {};
  for (let i = 0; i < Fruit.length; i++) {
    if (!map[Fruit[i]]) {
      map[Fruit[i]] = 0;
    }
    map[Fruit[i]] += 1;
    while (Object.keys(map).length > 2) {
      map[Fruit[start]] -= 1;
      if (map[Fruit[start]] === 0) {
        delete map[Fruit[start]];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(FruitsInBasket(["A", "B", "C", "A", "C"]));
console.log(FruitsInBasket(["A", "B", "C", "B", "B", "C"]));
