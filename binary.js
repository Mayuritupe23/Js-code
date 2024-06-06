//decimal to binary conversion.
const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the Decimal num:- "));
let B=0,r,b=1,x=n;
while(n>0){
    r=n%2;
    B+=r*b;
    n=parseInt(n/2);
    b*=10;
}
console.log("Binary of Decimal num "+x+" is: "+B);