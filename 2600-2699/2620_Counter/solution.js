/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let i = 0;
    return () => n + i++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//Runtime: 35ms
//Memory: 48.4 MB