/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = Math.floor(Math.random() * 101) // тестовое значение, можно изменять (либо просто число написать)
let grade
// your code

if (score < 50) {
    grade = 'F'
} else if (score >= 50 && score <= 69) {
    grade = 'D'
} else if (score >= 70 && score <= 79) {
    grade = 'C'
} else if (score >= 80 && score <= 89) {
    grade = 'B'
} else {
    grade = 'A'
}

console.log(grade);
