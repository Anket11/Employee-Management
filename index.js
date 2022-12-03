const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80"; 

let sum =0;
for(char of sumofString)
    isNaN(parseInt(char)) ? sum=sum+0:sum=sum+parseInt(char);
console.log("Sum is:",sum);