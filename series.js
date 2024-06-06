// 1) x-x^3/3+x^5/5-x^7/7+x^9/9+......+n.
//find sum of series.
const prompt=require("prompt-sync")();
// let n=parseInt(prompt("Enter value of n: "));
// let x=parseInt(prompt("Enter the value of x: "));
// let k=1,sum=0;
// for(let i=1;i<=n;i++){
//     let p=1;
//     for(let j=1;j<=k;j++){
//         p=p*x;
//     }
//     if(i%2==0){
//         sum-=p/k;
//     }
//     else{
//         sum+=p/k;
//     }
//     k+=2;
// }
// console.log("Sum of series=",sum);

//2) -x^2/2! - (x^4*y)/4! + (x^6*y^2)/6! + (x^8*y^3)/8! - ....n.
// let n=parseInt(prompt("Enter number of turms for finding sum of series: "));
// let x=parseInt(prompt("Enter value of x: "));
// let y=parseInt(prompt("Enter value of y: "));
// let k=2,sum=0;
// for(let i=1;i<=n;i++){
//     let p=1,f=1,q=1,p1=1,mul=1;
//     for(let j=1;j<=k;j++){
//         p*=x;
//         f*=j;
//         while(q<i){
//             p1*=y;
//             q++;
//         }

//     }
//     mul=p*p1;
//     if((i-1)%4==0 && (i-1)%4==1){
//         sum-=mul/f;
//     }
//     else{
//         sum+=mul/f;
//     }
//     k+=2;
// }
// console.log(sum);
