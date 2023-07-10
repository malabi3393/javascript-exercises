const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
  let sum = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return sum;
	
};

const multiply = function(...elements) {
  let product = elements.reduce(function(product, current) {
    return product * current;
  }, 1);
  return product;

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
