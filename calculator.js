function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
  return  (operator === 'add') ? add(num1, num2) : 
          (operator === 'subtract') ? subtract(num1, num2) :
          (operator === 'multiply') ? multiply(num1, num2) :
          (operator === 'divide') ? divide(num1, num2) :
          "Invalid entry!";
}

let display = document.querySelector('.display')

function noDecimal(num) {
    if (num.value.includes('.')) {
        return false
    } else {
        return true
    }
}

let num1 = ''
let num2 = ''
let n1 = ''
let operator = ''
let result = ''

function enter(input) {
    if (input === 'C') {
        display.value = ''
        result = ''
        num2 = ''
        n1 = ''
        operator = ''
        document.getElementById('clear').innerHTML = 'AC'
    }
    else if (input=== '%') {
        display.value /= 100
    }
    else if (input === '-') {
            display.value *= -1
        }
    else if (input === '.' && noDecimal(display)) {
        display.value += '.'
    }
    else if (typeof input === 'number') {
        if (result != '') {
            n1 = result
            display.value = ''
            display.value += input
            result = 0
        }
        else if (result === 0) {
            display.value += input
        } else {
        display.value += input
        document.getElementById('clear').innerHTML = 'C'
    }
}
}

function operation(method) {
    if (display.value === '') {
        display.value = ''
    }
    else if (result != '') {
        num1 = parseFloat(display.value)
        display.value = ''
        num2 = ''
    }
    else if (operator != '') {
        num2 = display.value
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        result = operate(operator, num1, num2)
        display.value = result
        num1 = result
    } else {
    num1 = display.value
    display.value = ''
    }
    operator = method

}

function equals() {
    if (n1 != '') {
        num1 = parseFloat(num1)
        num2 = parseFloat(display.value)
        result = operate(operator, num1, num2)
        display.value = result
        n1 = ''
    }
    else if (typeof num1 === "number" && num2 === '') {
        num2 = parseFloat(display.value)
        result = operate(operator, num1, num2)
        display.value = result
    }
    else if (num2 != '') {
        num1 = parseFloat(display.value)
        result = operate(operator, num1, num2)
        display.value = result
    } 
    else if (num2 === 0) {
        num1 = result
        result = operate(operator, num1, num2)
        display.value = result
    }
    else {
    num2 = display.value
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    result = operate(operator, num1, num2)
    display.value = result
    }
}
