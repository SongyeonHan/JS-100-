let 반지름 = prompt('원의 반지름을 입력하세요.');
let result = 0;

function 원의넓이(반지름){
    return 반지름*반지름*3.14;
};

result = 원의넓이(반지름);
console.log(result);