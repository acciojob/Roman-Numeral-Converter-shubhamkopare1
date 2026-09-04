function convertToRoman(num) {
  // Base case for 0
  if (num === 0) return '';

  const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (const [symbol, value] of lookup) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Test example (fixed missing closing parenthesis)
console.log(convertToRoman(36)); // Output: XXXVI


// Export for module systems
module.exports = convertToRoman;