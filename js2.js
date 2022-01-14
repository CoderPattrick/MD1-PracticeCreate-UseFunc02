// Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function areaOfCircle(x){
    let result1 = x*x*3.14;
    return result1;
}
function perimeterOfCircle(x){
    let result2 = 2*x*3.14;
    return result2;
}
function calculate(x) {
    let perimeter = perimeterOfCircle(x);
    let area = areaOfCircle(x);
    let display = "Bán kính hình tròn: " + x + "<br/>" +
        "Chu vi hình tròn: " + perimeter + "<br/>" +
        "Diện tích hình tròn: " + area;
    document.getElementById("result").innerHTML = display;
}







