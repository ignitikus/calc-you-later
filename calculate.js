
function calculate(num1, num2, sign) {    if(sign === '+' || sign.toLowerCase() === "plus") {
        return parseFloat(num1) + parseFloat(num2);
    } else if (sign === '-' || sign.toLowerCase() === "minus" ){
        return parseFloat(num1) - parseFloat(num2);
    } else if (sign.toLowerCase() === 'x' || sign.toLowerCase() === "x" || sign.toLowerCase() === "times"){
        return parseFloat(num1) * parseFloat(num2);
    } else if (sign === "/"){
        return parseFloat(num1) / parseFloat(num2);
    } else if (sign === "%" || sign.toLowerCase() === "modulus"|| sign.toLowerCase() === "mod"){
        return parseFloat(num1) % parseFloat(num2);
    }
    else{
        return "Sorry, that's not a mathematical operation!"
    }
}


module.exports = calculate;