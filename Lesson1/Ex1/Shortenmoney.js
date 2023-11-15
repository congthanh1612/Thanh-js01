function shortdigits(number1){
   let digitArr= ["","K","M","B"];
   let count=number1[number1.length-1];
   return digitArr[number1];
}
function shortenmoney(number2){
   let count =0;
   let number1=[];
   while(number2/1000>=1){
      number2/=1000;
      count++;
   }
   if(Number.isInteger(number2)){
      console.log(number2 + shortdigits(count));
   }
   else{
      console.log(number2.toFixed(2)+shortdigits(count));
   }
}
shortenmoney(1000);
shortenmoney(12345678);
shortenmoney(5200);
shortenmoney(1123400000);