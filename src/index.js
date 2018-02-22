// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let countSuchCoin = function (currency, coinValue) {
        let count = 0;
        if (currency >= coinValue) {
            while (currency >= coinValue) {
                currency -= coinValue;
                count += 1;
            }
        }
        return count;
    };

    let exchangeUseCertainCoin = function(currency, coinValue, coinSymbol, exchange) {
        count = countSuchCoin(currency, coinValue);
        currency -= coinValue * count;
        if (count != 0)
            exchange[coinSymbol] = count;
        return currency; // remainder
    }

    
    let exchange = {};
    if ( currency > 0 && currency < 10000) {
        remainder = exchangeUseCertainCoin(currency, 50, 'H', exchange);
        remainder = exchangeUseCertainCoin(remainder, 25, 'Q', exchange);
        remainder = exchangeUseCertainCoin(remainder, 10, 'D', exchange);
        remainder = exchangeUseCertainCoin(remainder, 5, 'N', exchange);
        exchangeUseCertainCoin(remainder, 1, 'P', exchange);
    } else {
        if (currency > 10000) {
            exchange = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
    }
    return exchange;
}




