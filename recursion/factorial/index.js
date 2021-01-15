// init value

let element = 10000;

// Recursion method
// O(n)
// main disadvantage of the recursion method is the limit of max call stack size
// Chromium(Chrome, Yandex, Edge) has one value, Gecko(Mozila Firefox) another value
const recFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * recFactorial(num - 1);
};

// Cycle method
// unlimited value depends on memory
const cycleFactorial = (num) => {
  let finalValue = 1;

  if (num === 0 || num === 1) {
    return finalValue;
  } else {
    for (let i = 2; i <= num; i++) {
      finalValue *= i;
    }
    return finalValue;
  }
};

console.log(recFactorial(element));
console.log(cycleFactorial(element));
