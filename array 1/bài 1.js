let array = ["chó", "mèo", 1, 2, 3];

let integersFound = false;
for (let i = 0; i < array.length; i++) {
  if (Number.isInteger(array[i])) {
    console.log(array[i]);
    integersFound = true;
  }
}

if (!integersFound) {
    console.log("Trong mảng không tồn tại số nguyên")
}
