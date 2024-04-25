class Solution {
    public int[] runningSum(int[] nums) {
        for (int i=1; i < nums.length; i++) {
            nums[i] += nums[i-1];
        }
        return nums;
    }
}

//Runtime: 1ms
//Memory: 43.7 MB