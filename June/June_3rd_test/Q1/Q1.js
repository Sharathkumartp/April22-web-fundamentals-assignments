const input = [1, -5, 2, 10, -30, 29, 50];
let positiveNumSum = 0;
input.forEach(function (element) {
  if (element > 0) {
    positiveNumSum += element;
  }
});
console.log(positiveNumSum);