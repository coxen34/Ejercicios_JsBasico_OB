//FACTORIAL-FOR

let num=10;
let x=1;

for(let i=1;i<=num;i++){
    x=x*i;
}console.log("El factorial de 10 es: "+x);

//FACTORIAL-WHILE

let i = 1;
let j = 1;
while (i <= num) {
  j = j * i;
  i++;
}
console.log("El factorial de 10 con while es: " + j);

//BREAK

let k=1;
let s=1;
while(true){
    s++;
    k = k * s;
    if(s==num){
        break;
    }
}
console.log("El factorial de 10 con break es: " + k);
