const prompt=require("prompt-sync")();
let r=5;
for(let i=1;i<=r;i++){
    let c=''
    for(let j=1;j<=i;j++){
         c+=j+' '
    }
    console.log(c);
}