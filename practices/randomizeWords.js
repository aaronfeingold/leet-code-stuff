/*
Write an application that takes in a sentence from the user and returns a sentence of
“readable” scrambled words. For example, calling scramble(“Because the first and last lette
of each word are the same you can read this”)  Returns:  “Bcesaue the fisrt and lsat ltteer of ecah wrod are the smae you can raed tihs”
**/

const randomizeWords = (phrase) => phrase.split(" ").map(word => `${word[0]}${shuffle(word.slice(1, word.length -1))}${word[word.length -1]}`).join(" ");

function shuffle(word) {
    const split = word.split("")
    for (let i = split.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [split[i], split[j]] = [split[j], split[i]];
    }

    return split.join("");
};

const result = randomizeWords("Because the first and last letter of each word are the same you can read this")
console.log(result)
