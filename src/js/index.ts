function calculate(): void {
    let number1InputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number1");
    let number2InputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number2");
    let number1string: string = number1InputElement.value;
    let number2string: string = number2InputElement.value;

    var number1number = parseInt(number1string);
    var number2number = parseInt(number2string);

    let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operatorSelect");
    let operation: string = operationElement.value;

    var result = calc(operation, number1number, number2number);
    console.log("Result: " + result);

    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("resultSpan");
    outputElement.innerHTML = result.toString();
    /*
    var result = number1number + number2number;
    console.log(result);

    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("resultSpan");
    outputElement.innerHTML = result.toString();
    */
}

function calc(operation: string, a: number, b: number): number{
    switch(operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return -1;
    }
}

let sumButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sumButton");
sumButton.addEventListener("click", calculate);