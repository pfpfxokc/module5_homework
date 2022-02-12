//задание 2

let x = 2345678;

switch (typeof x) {
  case 'number':
    console.log('х - число')
    break;
  case 'string':
    console.log('х - строка')
    break;
  case 'boolean':
    console.log('х - логическое значение')
    break;
  default:
    console.log ('х не определен')
}