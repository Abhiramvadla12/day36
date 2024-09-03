tea_type = prompt("enter the tea type here like regular tea , masala tea, ginger tea :");
add_on = prompt("enter add-on's like extra sugar, extra milk, no Add-ons: ");
if(tea_type !='regular tea' && tea_type != 'masala tea' && tea_type !='ginger tea'){
    console.log("enter a valid tea type as mentioned above:");
}
else if(add_on !='extra sugar' && add_on !='extra milk'&& add_on !='no Add-ons'){
    console.log("enter a valid Add-ons, mentioned above");
}
else{
    if(tea_type =='regular tea'){
        var cost = 15;
        if(add_on =='extra sugar'){
            cost += 2.5;
        }
        else if(add_on =='extra milk'){
            cost += 5;
        }
        else{
            cost += 0;
        }
    }
    if(tea_type =='masala tea'){
        var cost = 20;
        if(add_on =='extra sugar'){
            cost += 2.5;
        }
        else if(add_on =='extra milk'){
            cost += 5;
        }
        else{
            cost += 0;
        }
    }
    if(tea_type =='ginger tea'){
        var cost = 25;
        if(add_on =='extra sugar'){
            cost += 2.5;
        }
        else if(add_on =='extra milk'){
            cost += 5;
        }
        else{
            cost += 0;
        }
    }
    console.log("total cost :",cost);
    
}