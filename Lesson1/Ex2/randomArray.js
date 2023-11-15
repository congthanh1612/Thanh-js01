function randomnum(arr) {
    let L=arr.length;
    let max=arr[L-1];
    let min=arr[0];
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
//console.log(randomnum(["apple",2,3,"A","B",4,5,6]));
randomnum(["apple",2,3,"A","B",4,5,6]);
