function calculate(num1, num2, sign) {    
    if(sign === '+' || sign.toLowerCase() === "plus" || sign === "added to") {
        return parseFloat(num1) + parseFloat(num2);
    } else if (sign === '-' || sign.toLowerCase() === "minus" || sign === "subtracted from"){
        return parseFloat(num1) - parseFloat(num2);
    } else if (sign.toLowerCase() === 'x' || sign.toLowerCase() === "x" || sign.toLowerCase() === "times" || sign === "multiplied by"){
        return parseFloat(num1) * parseFloat(num2);
    } else if (sign === "/" || sign === "divided by"){
        return parseFloat(num1) / parseFloat(num2);
    } else if (sign === "%" || sign.toLowerCase() === "modulus"|| sign.toLowerCase() === "mod"){
        return parseFloat(num1) % parseFloat(num2);
    } 
        else{
        return "Sorry, that's not a mathematical operation!"
    }
}


module.exports = calculate;