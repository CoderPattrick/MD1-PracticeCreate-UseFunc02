function checkPositiveInteger(n){
    let check = true;
    if(n!=parseInt(n)){
        check = false;
    }
    if(n<=0){
        check = false
    }
    return check;
}
function letscheck(n){
    if (checkPositiveInteger(n)){
        document.getElementById("result").innerHTML
            = n + " là số nguyên dương."
    }
    else {
        document.getElementById("result").innerHTML
            = n + " không phải số nguyên dương"
    }
}