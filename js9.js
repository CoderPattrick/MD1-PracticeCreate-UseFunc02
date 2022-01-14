// Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
//     kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
//     Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
let arr =['!','@','#','$','%','^','&','*','(','(','*','_','+','*','&','{','}','"',':','?','>','<','|','~','`','\ ',']','[','=','-',"'",';','/','.',',','"',")",")"];
function findSym(x){
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (x==arr[i]){
            cnt++
        }
    }
    if (cnt==0){
        return -1;
    }
    else {
        return cnt;
    }
}
console.log(findSym(")"));