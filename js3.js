// Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
function primorial(x){
    let arr =[];
    let text = "";
    for (let i = 1; i <= x ; i++) {
        arr.push(i);
    }
    console.log(arr)
    console.log(eval(arr.join("*")))
    if(x<=0 && x!=parseInt(x)){
        text = "Giá trị nhập không hợp lệ."
        return text;
    }
    else {
        return eval(arr.join("*"));
    }
}
function cal(x){
    let display = "";
    if(x<=0 && x!=parseInt(x)){
        document.getElementById("result").innerHTML = primorial(x);
    }
    else{
        display = x + "! "+ "= " + primorial(x);
        document.getElementById("result").innerHTML = display;
    }
}