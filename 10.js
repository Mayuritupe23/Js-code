const prompt=require("prompt-sync")();
let r=parseInt(prompt("Enter the value of r: "));
for(let i=1;i<=r;i++){
    let c='';
    for(let j=i;j<r;j++){
         c+=' ';
    }
    for(let j=1;j<=r;j++){
        c+='* ';
    }
    console.log(c);
}