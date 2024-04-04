let array = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 1) {
    array.splice(i, 1);
    i--;
  }
}

console.log("1111", array);
