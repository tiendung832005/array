let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let array1 = [];
let array2 = [];

for(let i=0; i<array.length;i++){
    if(array[i] % 2 == 0){
        array1.push(i);
    }
    else{
        array2.push(i);
    }
}

console.log("Mảng lẻ", array1);
console.log("Mảng chẵn", array2);
