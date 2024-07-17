// reverse of given number ex 123---321

// var num = parseInt(prompt("Enter numbers"));
// var rem;
// var result=0;

// while(num!=0){
//     rem =parseInt(num%10);
//     result = (result*10)+rem;
//     num=parseInt(num/10);

// }

// document.write(`Reverse number :- ${result}`)

 let a = parseInt(prompt("Enter number one :"));
 let b = parseInt(prompt("Enter number Two :"));
 let c = parseInt(prompt("Enter number Three :"));

let x = Math.max(a,b,c); 

document.write(`${a},${b},${c} : Largest number = ${x}`);

 