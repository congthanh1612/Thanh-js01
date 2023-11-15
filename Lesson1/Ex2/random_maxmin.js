function randominteger(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min-1;
}
console.log(randominteger(10,200));