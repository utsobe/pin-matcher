function getPin() {
    const pin = Math.round(Math.random() * 1000000);
    const pinString = pin + '';
    console.log(pinString.length)
    if (pinString.length == 6) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('random-pin').value = pin;
}