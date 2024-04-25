/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    var j = 1;
    
   while (i < nums.length) {
        if (nums[i] == nums[j]) {
            nums.splice(j, 1);
        } else {
            i++;
            j++;
        }
    }
      
    return nums.length;
};

//Runtime: 208ms
//Memory: 45.1 MB