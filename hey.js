let ikiToplam = (arr, target) => {
  let storage = {};
  for (let [index, num] of arr.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};
console.log(ikiToplam([1, 2, 7, 11, 15], 9));
