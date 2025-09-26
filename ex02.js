// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference.
// Use the rest operator to handle the variable number of arguments.
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  return numbers
    .sort((a, b) => (a < b ? 1 : -1))
    .reduce((total, number) => (total - number > 0 ? total - number : 0));
}

console.log(subtract(2, 9, 10)); // Example usage
