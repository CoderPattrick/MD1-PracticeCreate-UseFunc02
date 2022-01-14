let arr = [2,1,3,4,5,6,7,1,3,33]
function reverse(x){
    for (let i = 0; i < x.length/2; i++) {
        let a = x[i];
        x[i]=x[x.length-1-i];
        x[x.length-1-i] = a;
    }
}
reverse(arr);
console.log(arr);
