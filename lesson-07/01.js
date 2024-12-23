/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords(str) {
//   let newStr = ''

//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       newStr += str[0].toUpperCase()
//     } else if (str[i - 1] === ' '){
//       newStr += str[i].toUpperCase()
//     } else {
//       newStr += str[i]
//     }
//   }
//   return newStr
// }

// console.log(capitalizeWords("hello world from javascript"));

// ИЛИ 

const newStr = (str) => {
  return str.split(" ").map(i => i[0].toUpperCase() + i.slice(1)).join(" ")
}

console.log(newStr("hello world from javascript"));

