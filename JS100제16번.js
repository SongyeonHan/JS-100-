let n = prompt();
let k = n.split('');
let reverse = '';

for(i=0; i < k.length; i++){
    reverse = k[i] + reverse;
}
alert(reverse);