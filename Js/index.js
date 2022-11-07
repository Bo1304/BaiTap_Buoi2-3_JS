

document.getElementById("TinhLuong").onclick = function BT1TinhLuong() {
    var salaryOfDay = Number(document.getElementById("salaryOfday").value);
    var Num_Working_Day = Number(document.getElementById("Working_Day").value);
    var content = "";
    var Salary = salaryOfDay * Num_Working_Day;

    content = "Lương là: " + Salary;
    document.getElementById("divBT1").innerHTML = content;
    document.getElementById("divBT1").classList.add("divBT1");
    console.log("Tổng lương là:", Salary);
}

document.getElementById("AVGNum").onclick = function BT2_AVG() {
    var n1 = Number(document.getElementById("Num1").value);
    var n2 = Number(document.getElementById("Num2").value);
    var n3 = Number(document.getElementById("Num3").value);
    var n4 = Number(document.getElementById("Num4").value);
    var n5 = Number(document.getElementById("Num5").value);
    var content = "";

    var SumNum = (n1 + n2 + n3 + n4 + n5) / 5;
    content = "Trung bình là: " + SumNum;
    document.getElementById("divBT2").innerHTML = content;
    document.getElementById("divBT2").classList.add("divBT2");
}

document.getElementById("QuyDoiTien").onclick = function BT3QuyDoiTien() {
    var VND = Number(23500);
    var USD = Number(document.getElementById("Num_USD").value);
    var ExchangeUsd = USD * VND;
    var content = "";
    let current = new Intl.NumberFormat("vi", {
        style: 'currency', currency: 'VND'
    });

    content = "Số tiền quy đổi là: " + current.format(ExchangeUsd);
    document.getElementById("divBT3").innerHTML = content;
    document.getElementById("divBT3").classList.add("divBT3");

}

document.getElementById("Tinh_HCN").onclick = function BT4_HCN() {
    var heightt = Number(document.getElementById("height_").value);
    var widthh = Number(document.getElementById("width_").value);

    var Perimeter_HCN = (heightt + widthh) * 2;
    var Area_HCN = heightt * widthh;
    var content = "";
    content = "Diện tích là: "+Area_HCN+" ,Chu vi là: "+Perimeter_HCN ;

    document.getElementById("divBT4").innerHTML = content;
    document.getElementById("divBT4").classList.add("divBT4");
}

document.getElementById("TinhKySo").onclick = function BT5KySo() {
    var Kyso = Number(document.getElementById("kySo").value);
    var Kyso1 = Kyso % 10 ;
    var Kyso2 = Math.floor(Kyso /10);
    SumNumber= Kyso2 + Kyso1 ;
    var content = "";
    content = "Tổng 2 ký số là: "+SumNumber;

    document.getElementById("divBT5").innerHTML = content;
    document.getElementById("divBT5").classList.add("divBT5");
}