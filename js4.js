function checktype(x){
let a = parseInt(x);
    if (a+a==2*a){
        return true;
    }
    else{
        return false;
    }
}

let a = prompt("Nhập vào đây");
alert(checktype(a));