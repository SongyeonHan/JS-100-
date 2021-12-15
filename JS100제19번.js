let n = prompt().split(' ');
let result = 0;

function 제곱 (a, b){
    return a ** b;
}

result = 제곱(n[0], n[1]);
alert(result);

// 다른 방법

const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));