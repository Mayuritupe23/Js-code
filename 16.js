const prompt=require("prompt-sync")();
prompt("Perfect numbers under 1000 are: ");
  
      
for(let i=1;i<1000;i++){
    let sum=0;
    for(let j=1;j<i;j++){
        if(i%j==0){
            sum+=j;
        }
    }
      if(sum==i){
          console.log(i);
    }
    
}