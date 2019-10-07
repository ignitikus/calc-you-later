const calculate = require('./calculate');

const num1 = process.argv[2];
const sign = process.argv[3];
const num2 = process.argv[4];



console.log(calculate(num1, num2, sign))
