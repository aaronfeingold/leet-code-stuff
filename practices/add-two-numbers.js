const addTwoNumbers = function(l1, l2) {
  const a = [l1, l2].map(arr=>parseInt(arr.reverse().join('')))
  const b = Array.from(String(a[0] + a[1]), Number).reverse()
  return b
};

const list1 = [2,4,3]; const list2 = [5,6,4]

console.log(addTwoNumbers(list1, list2))