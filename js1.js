function squarefunc(x){
    let result = x*x;
    return result;
}
function square(x){
    let result = "Bình phương của " + x + " bằng " + squarefunc(x);
    document.getElementById("result").innerHTML = result;
}