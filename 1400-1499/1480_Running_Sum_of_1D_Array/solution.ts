function runningSum(nums: number[]): number[] {
    for (let i: number = 1; i<nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

//Runtime: 80ms
//Memory: 44.9 MB