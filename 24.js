//find hcf of given n numbers
const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the set of num for finding hcf: "));

let a=parseInt(prompt("Enter 1st num: "));
let m=a;
for(let i=1;i<n;i++){
    let a=parseInt(prompt("Enter "+ (i+1)+ " num: "));
    let n=a;
    while(n!=0){
        let T=n;
        n=m%n;
        m=T;
    }
}
console.log("HCF of given num is: "+m);