var map = {};

var fib = function(n) {
    if (n <= 1) {
        return n
    }
    console.log(`this is n: ${n}`);
    console.log(`this is the val: ${map[n]}`)
    if (!map[n]) {
        map[n] = fib(n-1) + fib(n-2)
    }

    return map[n]
};

console.log(fib(29))
