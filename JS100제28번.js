let input = prompt('단어를 입력해주세요!');

for (let i = 0; i < input.length - 1; i++ ){
    console.log(input[i], input[i + 1]);
}