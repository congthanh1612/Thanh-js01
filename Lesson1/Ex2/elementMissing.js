function elementmissing(arr1,arr2){
    let missing=element =>!arr1.includes(element);
    return arr2.filter(missing);
}
console.log(elementmissing([1,2,3,4,5],[1,2,3,4,5,6,7,8]));
console.log(elementmissing(["a","c","e"],["a","b","c","d"]));