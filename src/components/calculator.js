const display = document.querySelector('.calc__window-input');
const calculator = document.querySelector('.calc__characters');
const special = ['%', '/', '*', '-', '+'];

calculator.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const buttonVal = e.target.textContent;

    if (buttonVal === 'AC') {
      display.value = '0';
    } else if (buttonVal === '±') {
      display.value = display.value.startsWith('-')
        ? display.value.slice(1)
        : '-' + display.value;
    } else if (buttonVal === '=' && display.value !== '') {
      display.value = calculate(display.value);
    } else {
      if (display.value === '0') {
        display.value = buttonVal;
      } else {
        display.value += buttonVal;
      }

      if (special.includes(buttonVal)) {
        const lastChar = display.value[display.value.length - 2];
        if (special.includes(lastChar)) {
          display.value = display.value.slice(0, -2) + buttonVal;
        }
      }
    }
  }
});

function calculate(expression) {
  expression = expression.replace(/×/g, '*');
  expression = expression.replace(/÷/g, '/');
  expression = expression.replace(/(\d+)%/g, '($1 * 0.01)');

  const tokens = expression.match(/(\d+|\+|-|\*|\/|\(|\))/g);
  const output = [];
  const operators = [];

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  function applyOperator(op) {
    const b = output.pop();
    const a = output.pop();
    switch (op) {
      case '+':
        output.push(a + b);
        break;
      case '-':
        output.push(a - b);
        break;
      case '*':
        output.push(a * b);
        break;
      case '/':
        output.push(a / b);
        break;
    }
  }

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(Number(token));
    } else if (token in precedence) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        applyOperator(operators.pop());
      }
      operators.push(token);
    }
  }

  while (operators.length) {
    applyOperator(operators.pop());
  }

  return output[0];
}
