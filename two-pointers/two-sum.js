// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSumSortedArr = function (nums, target) {

//   let i = 0, j = nums.length - 1;
//   let sum;

//   while (i < j && sum !== target) {
//     sum = nums[i] + nums[j];

//     if (sum < target) {
//       i++;
//     } else if (sum > target) {
//       j--;
//     }
//   }

//   return [i, j]
// };


// const nums1 = [2, 7, 11, 15];
// const target1 = 18;

// const nums2 = [2, 3, 4];
// const target2 = 6;

// const nums3 = [3, 3];
// const target3 = 6;

// // [1, 2]
// console.log(twoSumSortedArr(nums1, target1))

// // [0, 2]
// console.log(twoSumSortedArr(nums2, target2))

// // [0, 1]
// console.log(twoSumSortedArr(nums3, target3))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  /* 
    the original problem is essentially x + y = target. find x and y.
    for each x, we have to find a y. we are searching for two things, which leads to the brute force solution.

    y = target - x;

    now we have reduced the things to look for (the unknowns). We are now looking for a y, y is somewhere in the array.

    target is defined, x is defined (each number we encounter in the array). so we can calculate y linearly, and store each number we encounter in the map
    
    one of those will eventually be our y.


   */
  

  const numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const y = target - x;

    if (y in numIndexMap) {
      return [numIndexMap[y], i];
    }
    
    numIndexMap[x] = i;
  }
};


const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 3];
const target3 = 6;

// [0, 1]
console.log(twoSum(nums1, target1))

// [1, 2]
console.log(twoSum(nums2, target2))

// [0, 1]
console.log(twoSum(nums3, target3))