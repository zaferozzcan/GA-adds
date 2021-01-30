// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs

let ar = [1, 2, 1, 2, 1, 3, 2, 2];

function sockMerchant(n, ar) {
  let pair = {};
  let pair_count = 0;
  for (let i = 0; i < n; i++) {
    pair[ar[i]] = (pair[ar[i]] | 0) + 1;
  }
  console.log(pair);
  for (key of Object.keys(pair)) {
    pair_count = pair_count + Math.floor(pair[key] / 2);
  }
  console.log(pair_count);
}
sockMerchant(ar.length, ar);
