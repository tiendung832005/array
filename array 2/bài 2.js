let a = prompt("Mời bạn nhập vào số nguyên a");
let b = prompt("Mời bạn nhập vào số nguyên b");

let array = [];

let max = Math.max(a, b);
let min = Math.min(a, b);

for (let i = min; i < max; i++) {
  array.push(i);
}


console.log("1111", array);
