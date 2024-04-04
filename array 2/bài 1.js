let array = [1, 2, 3, 4, 5, 6, 7];

let max = array[0];
let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}

console.log("Số lớn nhất", max);
console.log("Số bé nhất", min);

