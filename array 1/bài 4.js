let a = prompt("Nhập vào số a ");
let b = prompt("Nhập vào số b");

let array = [];
for (let i = 0; i <= a; i++) {
  if (i % b === 0) {
    array.push(i);
  }
}

for (let i = 0; i <= b; i++) {
  if (i % a === 0 && !array.includes(i)) {
    array.push(i);
  }
}

console.log(array);
