function romanize(charnumber, one, five, ten){
    switch (charnumber){
        case 1: return one;
        case 2: return one + one;
        case 3: return one + one + one;
        case 4: return one + five;
        case 5: return five;
        case 6: return five + one;
        case 7: return five + one + one;
        case 8: return five + one + one;
        case 9: return one + ten;
    }
}
function IntToRoman(num){
    let numberString=num.toString();
    let romanArr = [["I","V","X"],["X","L","C"],["C","D","M"]];
    let count = 0;
    let result = "";
    for (let i = numberString.length-1; i>=0; i--){
        result = romanize(Number(numberString[i]), romanArr[count][0], romanArr[count][1], romanArr[count][2]) + result;
        count++;
    }
    return result;
}
console.log(IntToRoman(69));
console.log(IntToRoman(26));
console.log(IntToRoman(999));