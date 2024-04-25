/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if ((Math.log2(n) % 1) == 0) {
        return true;
    } else {
        return false;
    }
};

//Runtime: 72ms
//Memory: 53.7 MB