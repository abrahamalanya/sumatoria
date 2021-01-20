
function suma() {

    // Se captura el valor de los input's
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var totalSuma = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').value = totalSuma;
}