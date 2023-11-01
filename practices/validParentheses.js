/**
 * @param {string} s
 * @return {boolean}
 */

var t = {
    '[': ']',
    '(': ')',
    '{': '}'
};
// if the item is an opener, push its complimentary closer into the stack
// but if it not an opener, and it is not equal to the last item in the stack, its not a valid parantheses
var isValid = function(s) {

    var a = [];

    for (let p of s) {
        console.log(`p: ${p}`)
        console.log(a)
        if (t[p]) {
            a.push(t[p])
            console.log(`new a: ${a}`)
        } else if (p !== a.pop()) {
            console.log('p is not right...')
            return false
        }
    };


    return a.length === 0;
};


if (isValid(")[{}{[]}]")) {
    console.log("returned true")
} else {
    console.log("foobar")
}
