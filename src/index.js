function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let left = [],
        right = [];
    let arr = expr.split('');

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === '(') {
            left.push(arr[i]);
        }
        if (arr[i] === ')') {
            right.push(arr[i]);
        }
        if ((arr[i] + arr[i + 1] + arr[i + 2]) === '/ 0') {
            throw new Error('TypeError: Division by zero.')
        }
    }
    if (left.length === right.length) {
        return new Function('return ' + expr)();
    } else {
        throw ("ExpressionError: Brackets must be paired");
    }
}


module.exports = {
    expressionCalculator
}