let n = prompt().split(' ');
let 합계 = 0;

for (const i of n) {
    // 문자열을 숫자로 변환
    합계 += parseInt(i)
}

alert(Math.floor(합계/n.length))