var removeDuplicates = function(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        console.log(`j starting at: ${j}`)
        console.log(`i starting at: ${i}`)
        console.log(`nums: ${nums}`);
        console.log(`nums i: ${nums[i]}`);
        console.log(`nums j: ${nums[j]}`);
        if (nums[i] == nums[j]) continue;
        console.log('setting the value at i to the value at j')
        nums[++i] = nums[j]
        console.log(`j is now: ${j}`)
        console.log(`the number at j is now: ${nums[j]}`)
        console.log(`i is now: ${i}`)
        console.log(`the number at i is now: ${nums[i]}`)

    }

    return i + 1;
};

console.log(removeDuplicates([1,1,1,1,1,2,2,2,2,3,4,5,5,5,5,6,6,7,8,9,9,9]))
