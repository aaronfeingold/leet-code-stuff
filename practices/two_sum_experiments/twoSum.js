const twoSum = function(nums, target) {
  let indices = new Array;
  nums.forEach((n, i)=>{
    const diff = target - n;
    if ((nums.includes(diff) && nums.indexOf(diff) !== i) && (!indices.includes(nums.indexOf(diff)) || !indices.includes(nums.indexOf(diff)))){
      indices = [ ...indices, nums.indexOf(diff), i]
    }
  })
  return indices
};

const tests = [
  { 9: [2,7,11,15] },
  { 6: [3,2,4] },
  { 6: [3,3] }
]

tests.forEach(test => {
  for (const [k,v] of Object.entries(test)){
    console.log(twoSum(v, k))
  }
})