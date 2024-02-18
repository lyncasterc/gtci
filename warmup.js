/* 
  https://leetcode.com/problems/contains-duplicate
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const length = nums.length;
    const hash = {};

    for (let i = 0; i < length; i++) {
        if (hash[nums[i]]) {
            return true;
        }

        hash[nums[i]] = true;
    }

    return false;
};


/* 
  https://leetcode.com/problems/check-if-the-sentence-is-pangram/
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    const charSet = new Set();

    sentence.split('').forEach((char) => {
        const lowerCaseChar = char.toLowerCase();

        if (/[a-z]/.test(lowerCaseChar)) {
            charSet.add(lowerCaseChar);
        }
    });

    return charSet.size == 26;
};


// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0, right = x;
    let result = 0;

    while (left <= right) {
        let middle = Math.floor(left + ((right - left) / 2));
        let square = middle * middle;

        if (square < x) {
            left = middle + 1;
            result = middle;
        } else if (square > x) {
            right = middle - 1;
        } else {
            return middle;
        }
    };

    return result;
};

// https://leetcode.com/problems/reverse-vowels-of-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0, j = s.length - 1;
    const charArray = s.split('');
    const vowelRegex = /a|e|i|o|u/i;

    while (i < j) {
        if (!vowelRegex.test(charArray[i])) {
            i++;
        }

        if (!vowelRegex.test(charArray[j])) {
            j--;
        }

        if (vowelRegex.test(charArray[i]) && vowelRegex.test(charArray[j])) {
            let temp = charArray[j];
            charArray[j] = charArray[i];
            charArray[i] = temp;

            i++;
            j--;
        }
    }

    return charArray.join('');
};


// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    const isAlphanumerical = (char) => /[a-z0-9]/i.test(char);

    while (i < j) {
        if (!isAlphanumerical(s[i])) {
            i++;
        }

        if (!isAlphanumerical(s[j])) {
            j--;
        }

        if (isAlphanumerical(s[i]) && isAlphanumerical(s[j])) {
            if (s[i].toLowerCase() != s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
    }

    return true;
};


https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sHash = {};
    let tHash = {};

    for (let i = 0; i < s.length; i++) {
        sHash[s[i]] = sHash[s[i]] ? sHash[s[i]] + 1 : 1;
        tHash[t[i]] = tHash[t[i]] ? tHash[t[i]] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (!tHash[s[i]] || tHash[s[i]] != sHash[s[i]]) {
            return false;
        }
    }

    return true;
};

// https://www.designgurus.io/course-play/grokking-the-coding-interview/doc/63daaa1a0d01fe363b68c8d4
var shortestWordDistance = function (words, word1, word2) {
    let result = words.length;
    let word1Pos = -1;
    let word2Pos = -1;

    words.forEach((word, i) => {
        if (word == word1) {
            word1Pos = i;
        } else if (word == word2) {
            word2Pos = i;
        }

        if (word1Pos != -1 && word2Pos != -1) {
            result = Math.min(result, Math.abs(word1Pos - word2Pos));
        }
    });

    return result;
}