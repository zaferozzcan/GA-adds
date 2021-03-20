var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  if (merged.length % 2 == 0) {
    let mid1 = merged[merged.length / 2];
    let mid2 = merged[merged.length / 2 - 1];
    console.log(mid1, mid2);
    return (mid1 + mid2) / 2;
  } else {
    return merged[Math.floor(merged.length / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));
