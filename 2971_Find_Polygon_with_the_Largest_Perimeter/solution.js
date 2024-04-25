/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);

    let prev = 0;
    let ans = -1;

    for (const n of nums) {
        if (n < prev) {
            ans = n + prev;
        }
        prev += n;
    }

    return ans;
};

//Runtime: 217ms
//Memory: 66.5 MB