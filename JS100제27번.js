let students = new Object();

let name = prompt('이름을 입력하세요').split(' ');
let score = prompt('점수를 입력하세요').split(' ');

students = { 
    [name[0]]: score[0],
    [name[1]]: score[1]
};

console.log(students)

// 더 나은 코드

const name = prompt('이름을 입력하세요').split(' ');
const score = prompt('점수를 입력하세요').split(' ');
const students = {};

for (let i=0; i<name.length; i++) {
    students[name[i]] = parseInt(score[i], 10);
}

console.log(students);