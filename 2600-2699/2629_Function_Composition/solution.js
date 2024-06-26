/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) {
            return x;
        }
    } else {
        return function(x) {
            let ans = x;
            for (let i = functions.length - 1; i >= 0; i--) {
                ans = functions[i](ans);
            }
            return ans;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

//Runtime: 57ms
//Memory: 49.8 MB