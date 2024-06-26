/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled = false;
    let ans;

    return function(...args){
        if (!isCalled) {
            isCalled = true;
            ans = fn.apply(this, arguments);
            return ans;
        } else {
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//Runtime: 47ms
//Memory: 49.1 MB