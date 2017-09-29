Stock Market Profit

Write an function called getMaxProfit that takes in an array of stock prices and returns the best profit you could have made from 1 purchase and 1 sale. The prices in the array are in the sequence in which they were purchased and can only be sold after it was first purchased.

Input: getMaxProfit([10, 7, 5, 8, 11, 9])

Output: 7 ..this is the result of 12 - 5

Solution

stock_prices_yesterday = [10, 17, 5, 8, 11, 9, 12]

function getMaxProfit(stockPricesYesterday) {
    if (stockPricesYesterday.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }

    let minPrice = stockPricesYesterday[0];
    let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
    for (let i = 1; i < stockPricesYesterday.length; i += 1) {
      const currentPrice = stockPricesYesterday[i];
      const potentialProfit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, currentPrice);
    }
    return maxProfit;
}
