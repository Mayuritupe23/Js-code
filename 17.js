const prompt=require("prompt-sync")();
//write a program to find the sum of following series
//1+2+6+24+120+....n
let n=parseInt(prompt("Enter the no.of turms: "))
let x=1,sum=0;

for(let i=1;i<=n;i++){
    x=x*i;
    sum+=x;
}
    console.log("Sum of above series is: ",sum);
