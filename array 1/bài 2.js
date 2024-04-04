let array = ["bún", "phở", "miến", 1, 2, 3];
let a = prompt("mời bạn nhập vào giá trị bất kì trong mảng");
let find = array.indexOf(parseInt(a));

if (a !== -1) {
  console.log(`vị trí ${a}`);
} else {
  console.log("Phần tử không tồn tại trong mảng");
}
