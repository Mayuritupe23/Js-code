const prompt=require("prompt-sync")();
// find the max and min of given set of number.
let n=parseInt(prompt("Enter the set of num for finding max and min : "));

let a=parseInt(prompt("Enter 1st num: "));
min=a,max=a;
for(let i=1;i<n;i++){
    let a=parseInt(prompt("Enter num  "+ (i+1)+" :"));
    if(a>max){
        max=a;
    }
    if(a<min){
        min=a;
    }

}
console.log("min="+min+"\n max="+max)