let arr = [1, 4, 8, 9, 32];

let arrEven;

let arrOdd;

arr.forEach(function (item, index) {
    if (isNaN(item)) {
    console.log('не число');
    } else if (item % 2 === 0) {
      arrEven = arrEven + 1;
    } else if (item % 2 === !0) {
      arrOdd = arrOdd + 1;
    }
});

console.log(arrEven);
console.log(arrOdd);

//не вышло, не понимаю, правда, почему, можете объяснить почему