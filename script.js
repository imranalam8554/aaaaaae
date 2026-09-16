const display = document.getElementById("display");

function addNumber(number) {

    if (display.innerText === "0" && number !== ".") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function addOperator(operator) {

    const lastCharacter = display.innerText.slice(-1);

    if ("+-*/".includes(lastCharacter)) {
        return;
    }

    display.innerText += operator;
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {

    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function percentage() {

    let value = parseFloat(display.innerText);

    if (!isNaN(value)) {
        display.innerText = value / 100;
    }
}

function calculate() {

    try {

        const expression = display.innerText;

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }

    } catch (error) {
        display.innerText = "Error";
    }
}