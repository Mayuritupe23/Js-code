const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the value of n: "));
let k=parseInt(prompt("Enter the value of k: "));
let i=n;
let c=0;
let ass=false;
while(i>0){
    if(n%i==0){
         c++;
        if(c==k){
            console.log(k+ " max factor of num "+n+" is: ",i)
            ass=true;
        }
       }
    i--;

}
if(ass==false){
    console.log("Their is no "+k+" max factor of ",n);

}

