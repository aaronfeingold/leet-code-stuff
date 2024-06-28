function dynamicTwoSum (array, target) {
    const hashTable = new Map();

    for (let i = 0; i < array.length; i++) {
        const math = target - array[i];
        if (hashTable.has(math)) {
            return [hashTable.get(math), i];
        }

        hashTable.set(array[i], i)
    }
}

const tests = [
    { 9: [2,7,11,15] },
    { 6: [3,2,4] },
    { 6: [3,3] }
  ]

tests.forEach(test => {
    for (const [k,v] of Object.entries(test)){
        console.log(dynamicTwoSum(v, k))
    }
})
