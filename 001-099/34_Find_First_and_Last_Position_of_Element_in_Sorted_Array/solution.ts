function searchRange(nums: number[], target: number): number[] {
    let first: number = -1;
    let second: number = -1;
    
    if (nums.includes(target)) {
        first = nums.indexOf(target);
        second = nums.lastIndexOf(target);
    }
    
    let result: number[] = [first, second];
    return result;
};

//Runtime: 111ms
//Memory: 44.8 MB