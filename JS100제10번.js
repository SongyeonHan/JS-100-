document.write(`${star}${star}${star}${star}${star}${star}${star}${star}${star}`);
document.write(`' '${star}${star}${star}${star}${star}${star}${star}' '`);
document.write(`' '' '${star}${star}${star}${star}${star}' '' '`);
document.write(`' '' '' '${star}${star}${star}' '' '' '`);
document.write(`' '' '' '' '${star}' '' '' '' '`);

// 별찍기

k = prompt();  

for(let i=0; i<k ; i++){

    for(let n = 0; n < i; n++){
        s+=`&nbsp`;
    }
    for(let j=0; j < 2*(k-i)-1; j++){
        s += '*';
    }
    s+='<br>';
}

document.write(s);

// ---------------------
for(let i = 5; i > 0; i--){

    for(let j = 0; j <= 2 * k - 1; j ++){
        s += '*';
    ;}

}

k
9 7 5 3 1

// 5
k = prompt(); 

let s = '';

for(let i = 1; i <= k; i++){

    for(let j = 1; j <= k - i; j++ ){
        s+=`&nbsp`;
    }

    for(let n = 1; n <= 2 * i - 1; n++){
        s += '*';
        // ***
    }
    s+='<br>';

}

document.write(s);
