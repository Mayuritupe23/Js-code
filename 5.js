//full myramid pattern
const prompt=require("prompt-sync")();
let r=parseInt(prompt("Enter the value of r: "));
let k=1;
for(let i=1; i<=r; i++){
    let c=''
    for(let j=i; j<r; j++){
         c+=' ';
    }
    for(let j=1; j<=k; j++){
        c+='*';
    }
    k=k+2;
    console.log(c);
}
