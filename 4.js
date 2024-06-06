// const prompt=require("prompt-sync")();
// let r=5;
// for(let i=1;i<=r;i++){
//     let c=''
//     for(let j=i;j<r;j++){
//          c+=' ';
//     }
//     for(let j=1;j<=i;j++){
//         c+=j+' ';
//     }
//     console.log(c);
// }
const prompt=require("prompt-sync")();
let r=parseInt(prompt("Enter the value of r: "));
for(let i=1;i<=r;i++){
    let c=''
    for(let j=i;j<r;j++){
         c+=' ';
    }
    for(let j=1;j<=i;j++){
        c+=j+'';
    }
    console.log(c);
}