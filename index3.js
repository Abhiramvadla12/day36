var discount ;
var day = prompt("enter the day like sunday , monday ,tuesday, wednesday,thursday,friday,staurday:");
var age = Number(prompt("enter your age:"));
if(day!='sunday' && day!='monday' && day!='tuesday'&& day!='wednesday'&& day!='thursday'&& day!='saturday'&&day!='friday' ){
    console.log("please enter a valid day , mentioned above");
}
else if(age < 0){
    console.log("please enter a valid age or positive vlaues");
}
else{
    if(day=='friday'||day=='monday'||day=='thursday'||day=='tuesday'||day=='wednesday'){
        var price = 12;
        if(age >=65 || age <=12){
            price -= price*0.5;
            
        }
        else{
            price;
        }
    }
    else{
    var price = 15;
    if(age >=65 || age <=12){
        price -= price*0.3;
    }
    else{
        price;
    }

    }
    console.log(price);
}