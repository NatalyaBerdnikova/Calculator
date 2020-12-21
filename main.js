let calcOutput = document.querySelector('.js-calculator-output');

let cleanButton = document.querySelector('.js-clean-button');

if (cleanButton) {
  cleanButton.addEventListener('click', function () {
    calcOutput.textContent = '';
  })
}

let numberButtons = document.querySelectorAll('.js-number-button');
if (numberButtons) {
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
      calcOutput.textContent += numberButtons[i].dataset.number;
    })
  }
}

let hasOperands = function (text) {
  let operandArray = ['*', '/', '+', '-'];

  for (let i = 0; i < operandArray.length; i++) {
    if (text.indexOf(operandArray[i]) > -1) {
      return true;
    }
  }

  return false;
}

let operationButtons = document.querySelectorAll('.js-operation-button');
if (operationButtons) {
  for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', function () {
      let text = calcOutput.textContent;
      let lastSymbol = text.substr(-1);
      if (['*', '/', '+', '-'].indexOf(lastSymbol) === -1) {
        calcOutput.textContent += operationButtons[i].dataset.operation;
      }
      if (hasOperands(text)) {
        let result = 0;
        let equation = calcOutput.textContent;
        let numbers = equation.split(/\*|\/|\+|\-\s*/).filter(function (el) {
          return el != '';
        });
        let signs = equation.split(/\d/).filter(function (el) {
          return el != '';
        });
        let firstSymbol = equation.substr(0, 1);
        if (firstSymbol == '-') {
          let number = numbers[0];
          numbers[0] = '-' + number;
          signs[0] = '';
          signs = signs.filter(function (el) {
            return el != '';
          });
          console.log(firstSymbol, numbers, signs);
        }
        console.log(equation, numbers, signs);
        for (let j = 0; j < (signs.length - 1); j++) {
          if (signs[j] == '*') {
            result = Number(numbers[j]) * Number(numbers[j + 1]);
          } else if (signs[j] == '/') {
            result = Number(numbers[j]) / Number(numbers[j + 1]);
          } else if (signs[j] == '+') {
            result = Number(numbers[j]) + Number(numbers[j + 1]);
          } else if (signs[j] == '-') {
            result = Number(numbers[j]) - Number(numbers[j + 1]);
          }
          calcOutput.textContent = String(result) + String(signs[j + 1]);
        }
      }
    });
  }
}

let equally = document.querySelector('.js-equally');
if (equally) {
  equally.addEventListener('click', function () {
    let text = calcOutput.textContent;
    if (hasOperands(text)) {
      let result = 0;
      let equation = calcOutput.textContent;
      let numbers = equation.split(/\*|\/|\+|\-\s*/).filter(function (el) {
        return el != '';
      });
      let signs = equation.split(/\d/).filter(function (el) {
        return el != '';
      });
      let firstSymbol = equation.substr(0, 1);
      if (firstSymbol == '-') {
        let number = numbers[0];
        numbers[0] = '-' + number;
        signs[0] = '';
        signs = signs.filter(function (el) {
          return el != '';
        });
        console.log(firstSymbol, numbers, signs);
      }
      for (let j = 0; j < (signs.length); j++) {
        if (signs[j] == '*') {
          result = Number(numbers[j]) * Number(numbers[j + 1]);
        } else if (signs[j] == '/') {
          result = Number(numbers[j]) / Number(numbers[j + 1]);
        } else if (signs[j] == '+') {
          result = Number(numbers[j]) + Number(numbers[j + 1]);
        } else if (signs[j] == '-') {
          result = Number(numbers[j]) - Number(numbers[j + 1]);
        }
        if ((numbers.length == 1) && (signs[j] == '-')) {
          result = '-' + numbers[0];
        }
        calcOutput.textContent = String(result);
      }
    }
  });
}

let switchThemeButton = document.querySelector('.js-switch-theme-button');
if (switchThemeButton) {
  let body = document.querySelector('.body');

  switchThemeButton.addEventListener('click', function () {
    body.classList.toggle('body--dark-theme');
  })
}
