function combination(k,n){
    if(k===0 || k===n) {
        return 1;
    }
    else{
        return combination(k-1,n-1)+combination(k,n-1);
    }
}
console.log(combination(2,5));
console.log(combination(5,10));