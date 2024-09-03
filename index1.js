var mem_status = prompt('enter your membrship status like regular customer or vip customer:');
var amount = Number(prompt("enter the amount here:"));
var discountedAmount;
if((mem_status !="regular customer" && mem_status != 'vip customer')){
    console.log("please enter a valid membrship status , mentioned above")
}
else if(amount < 0){
    console.log("please enter a valid amount or enter positive values")
}
else{
    if(mem_status == 'regular customer'){
        if(amount < 100){
            discountedAmount = amount - amount*0;
        }
        else if(amount <= 500 && amount >=100 ){
            discountedAmount = amount - amount*0.05;
        }
        else{
            discountedAmount = amount -amount*0.1;
        }
    }
    else{
        if(amount < 100){
            discountedAmount = amount - amount*0.1;
        }
        else if(amount <= 500 && amount >=100 ){
            discountedAmount = amount - amount*0.15;
        }
        else{
            discountedAmount = amount -amount*0.2;
        }
        
    }
    console.log(discountedAmount)
}
