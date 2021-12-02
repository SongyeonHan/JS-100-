// 정답 4번 16
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}
// for 문은 여기서 총 2번 순회한다 i값 1, 3

console.log(a+b);
// 즉 10(a) + 1(i) + 3(i) + 2(b) = 16