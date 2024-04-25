function twoSum(nums: number[], target: number): number[] {
    let resultList: number[] = [];
    let remainder: number;
    
    for (let i=0; i < nums.length; i++) {
        remainder = target - nums[i];
        
        for (let j=0; j < nums.length; j++) {
            if (j != i && nums[j] == remainder) {
                resultList.push(i);
                break;
            }
        }
    }
    return resultList;
};


//Runtime: 149ms
//Memory: 44.5 MB