//задание 1 

let enter = +prompt("введите значение");

if (isNaN(enter)) {
  alert ("надо число")
} else {
  if (enter % 2 == 0) {
    alert ("число четное")
  } else {
    alert ('число нечетное')
  }
}



