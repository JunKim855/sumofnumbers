// For loop
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

// While loop
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

// Recursion
function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list[0] + sumRecursion(list.slice(1));
}

// Underscore
function sumUnderscore(list) {
  return _.reduce(list, (memo, num) => memo + num);
}

// Test functions
const list = [2, 4, 1, 6, 3]; // Sum should be 16

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumUnderscore(list));
