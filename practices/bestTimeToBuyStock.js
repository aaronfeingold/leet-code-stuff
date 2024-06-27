/**
 * @param {number[]} prices
 * @return {number}
 * Brute Force

start from the first element in the array, going through each, see if there is a later element that is greater in value
there could be a few later that are greater
so determine the maximum one ie the one that will have the greatest difference from the current element
compare the results of the maximum differences from all iterations, and return the greatest. if no positive difference is possible, return 0 for no profit
 */
var maxProfitBruteForce = function(prices) {
    let profits = [0];

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const diff = prices[i] - prices[j];
            if (diff > 0) {
                profits.push(diff);
            }
        }
    }

    return Math.max(...profits)
};

// smart way
// find the minimum price to buy at
// then find the max profit that could be made on that min

function maxProfitsSmart(prices) {
    let minPrice = Inifinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}
