function threeSum(numbers, target) {
    const numIndex = {};
    for (let i = 0; i < numbers.length; i++) {
        const resNum = target - numbers[i];

        if (numIndex.hasOwnProperty(resNum)) {
            return [numIndex[resNum], i];
        }

        numIndex[numbers[i]] = i;
    }
    return [];
}
const firstNums = [2, 7, 11, 15];
const secondNums = [3, 5, 7, 9, 0]
const target = 9;
console.log(threeSum(firstNums, target)); 
console.log(threeSum(secondNums, target));
