function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}

function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value); // Avoid using eval in real-world scenarios for security reasons
    } catch (e) {
        result.value = "Error";
    }
}
