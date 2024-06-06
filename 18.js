const prompt=require("prompt-sync")();

for(let i=100;i<=999;i++){
    let sum=0;
    let n=i;
    while(n>0){
        let d=n%10;
        let p=1;
        for(let j=1;j<=d;j++){
            p=p*j;
        }
        sum+=p;
        n=parseInt(n/10);
    }
    if(sum==i){
        console.log(i);
    }
}
