// Viết hàm nhận vào 3 số nguyên bất kỳ,
// trả về số nguyên có giá trị nhỏ nhất.
function minOf3(){
    let a = +prompt("Nhập số thứ nhứt");
    let b = +prompt("Nhập số thứ high");
    let c = +prompt("Nhập số thứ bar");
    if (a>b){
        a = b;
    }
    if(a>c){
        a = c;
    }
    return a;
}
alert(minOf3())