/* 
  Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The relative order of the elements should be kept the same and you should not use any extra space so that the solution has constant space complexity

  Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

  Example 1:

  Input: [2, 3, 3, 3, 6, 9, 9]
  Output: 4
  Explanation: The first four elements after moving element will be [2, 3, 6, 9].
  Example 2:

  Input: [2, 2, 2, 11]
  Output: 2
  Explanation: The first two elements after moving elements will be [2, 11]

*/

function bruteForceSolution(arr) {
  let end = 0;

  for (let i = 1; i < arr.length; i++) {

    let num = arr[i];
    let dupFound = false;

    for (let j = 0; j <= end; j++) {

      if (arr[j] === num) {
        dupFound = true;
        break;
      }
    }

    if (!dupFound) {
      arr[end + 1] = arr[i];
      end++;
    }
  }

  return end + 1;
}

function solution(arr) {
  let end = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[end]) {
      arr[end + 1] = arr[i];
      end++;
    }
  }

  return end + 1;
}

// console.log(solution([2, 2, 2, 11]))
// console.log(solution([2, 3, 3, 3, 6, 9, 9]))
// console.log(solution([1, 1, 2, 2, 3, 3, 4, 4]))
// console.log(solution([2,9]))
// console.log(solution([2]))
// console.log(bruteForceSolution([2, 2, 2, 11]))
// console.log(bruteForceSolution([2, 3, 3, 3, 6, 9, 9]))
// console.log(bruteForceSolution([2, 3, 3, 3, 6, 9, 9]))
// console.log(bruteForceSolution([2,9]))
// console.log(bruteForceSolution([2]))



/* 

  Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

  Example 1:

  Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
  Output: 4
  Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
  Example 2:

  Input: [2, 11, 2, 2, 1], Key=2
  Output: 2
  Explanation: The first two elements after removing every 'Key' will be [11, 1].

*/

function solution2(arr, key) {
  const first = arr.findIndex((num) => num !== key);
  let last = first;

  for (let i = first + 1; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[last + 1] = arr[i];
      last++
    }
  }

  return ((last - first) + 1);
}

console.log(solution2([3, 2, 3, 6, 3, 10, 9, 3], 3)) // 4
console.log(solution2([2, 11, 2, 2, 1], 2)) // 2