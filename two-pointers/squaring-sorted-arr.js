/* 
  Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

  Example 1:

  Input: [-2, -1, 0, 2, 3]
  Output: [0, 1, 4, 4, 9]
  Example 2:

  Input: [-3, -1, 0, 1, 2]
  Output: [0, 1, 1, 4, 9]

*/

function bruteForceSolution(arr) {
  const n = arr.length;
  const squares = Array(n).fill(null);
  let end = 0;

  for (let i = 0; i < n; i++) {
    const square = arr[i] ** 2

    if (typeof squares[end] !== 'number') {
      squares[end] = square;
    } else if (square > squares[end]) {
      squares[++end] = square;
    } else {
      let j = end;

      // this is basically insertion sort 
      while (j >= 0) {
        if (square < squares[j]) {
          squares[j + 1] = squares[j];
          j--;
        } else {
          break;
        }
      }

      squares[j + 1] = square;
      end++;
    }
  }

  return squares;
}

/**
 * Insert biggest square first at the END of the output array.
 * @param {number[]} arr 
 * @returns {number[]} 
 */
function solution(arr) {
  const squares = Array(arr.length);
  let i = 0;
  let j = n = arr.length - 1;

  while(i <= j) {
    const leftSquare = arr[i] ** 2;
    const rightSquare = arr[j] ** 2;

    if (leftSquare > rightSquare) {
      squares[n--] = leftSquare;
      i++;
    } else {
      squares[n--] = rightSquare;
      j--;
    }
  }

  return squares;
}

console.log(bruteForceSolution([-3, -1, 0, 1, 2])) // [0, 1, 1, 4, 9]
console.log(bruteForceSolution([-2, -1, 0, 2, 3])) // [0, 1, 4, 4, 9]
console.log(bruteForceSolution([-4, -2, 0, 2, 4])) // [0, 1, 4, 4, 9]

console.log(solution([-3, -1, 0, 1, 2])) // [0, 1, 1, 4, 9]
console.log(solution([-2, -1, 0, 2, 3])) // [0, 1, 4, 4, 9]
console.log(solution([-4, -2, 0, 2, 4])) // [0, 1, 4, 4, 9]

