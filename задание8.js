let map = new Map();

map 
   .set(`name`, `vlad`)
   .set(`age`, 49)
   .set(`job`, `doctor`)
   .set(`marital status`, `married`)




// console.log(map);

for (let entry of map) {
   console.log(entry);
}

for (let [key, value] of map) {
   console.log(value);
}

   

