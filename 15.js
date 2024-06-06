//15. series= 5+55+555+5555+....+n. find the sum of first n turms.
const prompt=require("prompt-sync")();
n=parseInt(prompt("Enter the no.of turms of series:- "));
x=parseInt(prompt("Enter 1st turm of series:- "));
let m=x, sum=0;
for(let i=1;i<=n;i++){
    sum+=x;
    x=x*10+m;
}
console.log("the sum of first n turms: ",sum);