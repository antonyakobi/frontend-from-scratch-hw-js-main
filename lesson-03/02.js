// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}

const chet = isEven(4)
console.log(chet);

