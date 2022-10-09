function calcSum(...nums) {
  var sum = 0;
  nums.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(calcSum(1, 2, 3, 4, 5));
