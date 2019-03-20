// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {
        "H":0,
        "D":0,
        "Q":0,
        "N":0,
        "P":0
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return {};
    }
    let count = currency;
    obj.H = Math.floor(count / 50);
    count = currency - obj.H * 50;
    obj.Q = Math.floor(count / 25);
    count = count - obj.Q * 25;
    obj.D = Math.floor(count / 10);
    count = count - obj.D * 10;
    obj.N = Math.floor(count / 5);
    count = count - obj.N * 5;
    obj.P = Math.floor(count / 1);

    for (let key in obj) {
        if (obj[key]===0) {
            delete obj[key];
        }
    }
    return obj;
}
