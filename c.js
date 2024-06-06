//PATTERN
const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the value of n: "));
if(n%2==0){
    let v=n*n, a=1;
    for(let i=1; i<=n; i++){
        let c='';
        for(let j=1; j<=n; j++){
            if(i%2==0){
                c+=' '+a;
                a++;

            }
            else{
                c+=' '+v;
                v--;
            }
        }
        if(i%2==0){
            v=a-(n+1);
        }
        else{
            a=v-(n-1);
        }
        
        console.log(c);
    }
}
    else{
     v=n*n-(n-1), a=1;
    for(let i=1; i<=n; i++){
        let c='';
        for(let j=1; j<=n; j++){
            if(i%2==0){
                c+=' '+a;
                a--;

            }
            else{
                c+=' '+v;
                v++;
            }
        }
        if(i%2==0){
            v=a-(n-1);
        }
        else{
            a=v-(n+1);
        }
        
        console.log(c);
    }
    
    
} 
