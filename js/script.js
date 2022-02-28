function addChar(input, character) {
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}

function cos(form) {
    form.result.value = Math.cos(form.result.value);
}
function sin(form) {
    form.result.value = Math.sin(form.result.value);
}
function tan(form) {
    form.result.value = Math.tan(form.result.value);
}
function sqrt(form) {
    form.result.value = Math.sqrt(form.result.value);
}
function ln(form) {
    form.result.value = Math.log(form.result.value);
}
function exp(form) {
    form.result.value = Math.exp(form.result.value);
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
    val = input.value;
    input.value = input.value + "%";
}
function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}
function compute(form) {
    form.result.value = eval(form.result.value);
}
function square(form) {
    form.result.value = eval(form.result.value) * eval(form.result.value)
}





function checkNum(str) {
for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
            && ch != "(" && ch!= ")" && ch != "%") {
                alert("Error")
                return false
            }
    }
}
return true
}



