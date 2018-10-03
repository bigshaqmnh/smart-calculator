class SmartCalculator {
  constructor(initialValue) {
    this.values = [initialValue];
    this.operators = [];
  }

  add(number) {
    while (this.operators.length) {
      this.calculate();
    }

    this.operators.push("+");
    this.values.push(number); 

    return this;
  }
  
  subtract(number) {
    while (this.operators.length) {
      this.calculate();
    }

    this.operators.push("-");
    this.values.push(number); 

    return this;
  }

  multiply(number) {
    while (this.operators[this.operators.length - 1] === "*"
          || this.operators[this.operators.length - 1] === "/"
          || this.operators[this.operators.length - 1] === "^") {
      this.calculate();
    }

    this.operators.push("*");
    this.values.push(number);

    return this;
  }

  devide(number) {
    while (this.operators[this.operators.length - 1] === "*"
          || this.operators[this.operators.length - 1] === "/"
          || this.operators[this.operators.length - 1] === "^") {
      this.calculate();
    }

    this.operators.push("/");
    this.values.push(number);

    return this;
  }

  pow(number) {
    this.operators.push("^");
    this.values.push(number);

    return this;
  }

  calculate() {
    let a = this.values.pop(), b = this.values.pop();
    let operator = this.operators.pop();

    if (operator === "+") {
      this.values.push(a + b);
    }
    if (operator === "-") {
      this.values.push(b - a);
    }
    if (operator === "*") {
      this.values.push(a * b);
    }
    if (operator === "/") {
      this.values.push(b / a);
    }
    if (operator === "^") {
      this.values.push(Math.pow(b, a));
    }
  }

  toString() {
    while (this.values.length > 1) {
      this.calculate();
    }

    return this.values.pop();
  }
}

module.exports = SmartCalculator;
