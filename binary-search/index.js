// init array and element
const randomArray = (length) => {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length));
  }

  return array;
};

const input = randomArray(1000000).sort((a, b) => a - b);
const element = Math.floor(Math.random() * input.length);

// Linear Search
// O(n)
const linearSearch = (array, el) => {
  for (i = 0; i < array.length; i++) {
    if (el === array[i]) {
      return i;
    }
  }
  return -1;
};

// Binary Search
// O(log N)
const binarySearch = (array, el) => {
  const sortedArray = array.sort((a, b) => a - b);

  let left = 0;
  let right = sortedArray.length - 1;

  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);

    if (el === sortedArray[mid]) {
      return mid;
    }

    if (el < sortedArray[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return -1;
};

// Outputs
console.log(linearSearch(input, element));
console.log(binarySearch(input, element));
