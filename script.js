function add() {
    var x = document.getElementById("v1").value;
    var y = document.getElementById("v2").value;
    x = parseInt(x);
    y = parseInt(y);
    var sum = x + y;
    document.getElementById("result").value = sum;

}

function sub() {
    var x = document.getElementById("v1").value;
    var y = document.getElementById("v2").value;
    x = parseInt(x);
    y = parseInt(y);
    var sub = x - y;
    document.getElementById("result").value = sub;
}

function mul() {
    var x = document.getElementById("v1").value;
    var y = document.getElementById("v2").value;
    x = parseInt(x);
    y = parseInt(y);
    var mul = x * y;
    document.getElementById("result").value = mul;
}

function div1() {
    var x = document.getElementById("v1").value;
    var y = document.getElementById("v2").value;
    x = parseInt(x);
    y = parseInt(y);
    var div1 = x / y;
    document.getElementById("result").value = div1;
}

function clr() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("result").value = "";

}