const tests = ["III", "LVIII", "MCMXCIV"];

const romanToInt = function(s) {;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return Array.from(s).reduce((a, ss, i)=> {
    let num = map[ss]
    if (['I', 'X', 'C'].includes(ss)){
      switch (ss) {
        case 'I':
          if (['V', 'X'].includes(s[i + 1])){
            num = map[ss]*-1
          }
          break;
        case 'X':
          if(['L', 'C'].includes(s[i + 1])){
            num = map[ss]*-1
          }
          break;
        case 'C':
          if(['D', 'M'].includes(s[i + 1])){
            num = map[ss]*-1
          }
          break;
      }
    }
    return a + num
  }, 0)

};

tests.forEach(test=>{
  console.log(romanToInt(test))
});
