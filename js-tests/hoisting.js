let a = 10;

(function () {
    // js has function scoping; since vars declared with let--like var-- are hoisted to top of scope, their initialized as undefined, but
    let a = 5;
    console.log(a);
})();

(function () {
    // js has function scoping, but a is not yet initialized
    console.log(a);
    const a = 5;
})();

