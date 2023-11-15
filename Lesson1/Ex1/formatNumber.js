function format(number) {
    let moneyString = String(number);
    let iDot = moneyString.indexOf(".");
    let IntPart = moneyString.split("").slice(0, iDot);
    let DecimalPart = moneyString.split("").slice(iDot);
    let result = '';

    for (let i = IntPart.length - 1; i >= 0; i--) {
        result=IntPart[i]+result;
        if ((IntPart.length - i) % 3 === 0 && i !== 0) {
            result =','+result;
        }
    }
    return result + DecimalPart.join("");
}
console.log(format(123.456));
console.log(format(112131312223.4567));