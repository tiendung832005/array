let array = [1, 4, 5, 5, 4, 1, 2, 3, 3, 3, 2];

let a = parseInt(prompt("Mời bạn nhập vào 1 số nguyên bất kì"));

let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === a) {
    count++;
  }
}
console.log(`Số lần xuất hiện của ${a} là ${count}`);
