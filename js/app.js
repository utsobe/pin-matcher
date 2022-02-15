// generate pin 
function getPin() {
    const pin = Math.round(Math.random() * 1000000);
    const pinString = pin + '';
    if (pinString.length == 6) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('random-pin').value = pin;
};


// match pin
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('random-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
});