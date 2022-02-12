let boo = true;

let arr = [1, 56, 89, 1, 967, 5445, 56];

arr.forEach(function (item, index) {
  for (let i = index + 1; i < arr.length; i++) {
    if (item === arr[i]) {
      boo = false;
    } 
    }
  }
);

console.log(arr);


console.log(boo);