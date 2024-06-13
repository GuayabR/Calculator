const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
    console.log("Cleared")
}

function calculate(){
    try{
        display.value = eval(display.value);
        console.log("Calculated", display.value)
    }
    catch(error){
        display.value = "Syntax error";
        console.log("Syntax error, clear display")
    }
}

document.addEventListener("keydown", keyDownFunction);

function keyDownFunction(keyboardEvent) {
    var keyDown = keyboardEvent.key.toLowerCase();
    console.log("Pressed:", keyDown);

    if (keyDown == 1) {
        appendToDisplay(1);
    }

    if (keyDown == 2) {
        appendToDisplay(2);
    }

    if (keyDown == 3) {
        appendToDisplay(3);
    }

    if (keyDown == 4) {
        appendToDisplay(4);
    }

    if (keyDown == 5) {
        appendToDisplay(5);
    }

    if (keyDown == 6) {
        appendToDisplay(6);
    }

    if (keyDown == 7) {
        appendToDisplay(7);
    }

    if (keyDown == 8) {
        appendToDisplay(8);
    }

    if (keyDown == 9) {
        appendToDisplay(9);
    }

    if (keyDown == 0) {
        appendToDisplay(0);
    }

    if (keyDown == '+') {
        appendToDisplay('+');
    }

    if (keyDown == '-') {
        appendToDisplay('-');
    }

    if (keyDown == '/') {
        appendToDisplay('/');
    }

    if (keyDown == '.') {
        appendToDisplay('.');
    }

    if (keyDown == '*') {
        appendToDisplay('*');
    }

    if (keyDown == 'backspace' || keyDown == 'c') {
        clearDisplay();
    }

    if (keyDown == 'enter') {
        calculate();
    }

}