function findRepeat(numbers) {
  const numbersSeen = new Set();
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numbersSeen.has(number)) {
      return number;
    }
    numbersSeen.add(number);
  }

  // Whoops--no duplicate
  throw new Error("no duplicate!");
}

console.log(findRepeat("acdefca"));
