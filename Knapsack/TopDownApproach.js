const KnapSack = (weight, values, capacity) => {
  if (weight.length !== values.length || capacity === 0) {
    return "Invalid Input";
  }
  let NumberOfItems = values.length; //weight.length

  const topDown = Array(NumberOfItems) // Here only two things are changing  //* Capacity and Current index *// so 2D should be declared for possible inputs
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  const TopDownKnapSack = (NumberOfItems, weight, values, capacity, index) => {
    let valueInclude, valueExclude;

    if (index === NumberOfItems || capacity <= 0) {
      // If the capacity is 0 or If we completed checking all the items we come to //* BASE CASE
      return 0;
    }

    //Memoization for the next time we will return the value directly instead of doing below stuff
    if (topDown[index][capacity] > 0) {
      return topDown[index][capacity];
    }
    valueInclude = 0;
    if (weight[index] <= capacity) {
      valueInclude =
        TopDownKnapSack(
          NumberOfItems,
          weight,
          values,
          capacity - weight[index],
          index + 1
        ) + values[index]; // If the Item is included then find the value
    }

    valueExclude = TopDownKnapSack(
      NumberOfItems,
      weight,
      values,
      capacity,
      index + 1
    ); //If the item is not included then dont decrease the capacity

    topDown[index][capacity] = Math.max(valueExclude, valueInclude);

    return topDown[index][capacity];
  };

  return TopDownKnapSack(NumberOfItems, weight, values, capacity, 0); // Pass all inputs along with current index of 0
};

//Inputs are Weight, Value and capacity
console.log(KnapSack([2, 4, 3, 5, 5], [3, 4, 1, 2, 6], 12)); //13
console.log(KnapSack([2, 3, 1, 4], [4, 5, 3, 7], 5)); //10
console.log(KnapSack([1, 2, 3, 5], [1, 6, 10, 16], 7)); //22
