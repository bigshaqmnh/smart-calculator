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

    if (this.operators[this.operators.length - 1] === "+") {
      this.operators.pop();
      this.values.push(a + b);
    }
    if (this.operators[this.operators.length - 1] === "-") {
      this.operators.pop();
      this.values.push(b - a);
    }
    if (this.operators[this.operators.length - 1] === "*") {
      this.operators.pop();
      this.values.push(a * b);
    }
    if (this.operators[this.operators.length - 1] === "/") {
      this.operators.pop();
      this.values.push(b / a);
    }
    if (this.operators[this.operators.length - 1] === "^") {
      this.operators.pop();
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
