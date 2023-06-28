const sumAll = function(lower, upper) {
    let temp;
    if (lower < 0 || upper < 0 || typeof(lower) !== 'number' || typeof(upper) !== 'number' ) {
        return 'ERROR';
    }
    if (lower > upper) {
        temp = lower;
        lower = upper;
        upper = temp;
    }
    sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
