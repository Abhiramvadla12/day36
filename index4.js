var age = Number(prompt("enter the age:"));
var num_participants = Number(prompt("enter no. of participants registered:"));
email = prompt("enter your email address:");
if(age < 0){
    console.log("enter a valid age or positive value");
}
else if(num_participants > 100){
    console.log("event is full , no more registerations are taken.")
}
else{
    if(age >=18){
        console.log("registeration completed");
    }
    else{
        console.log("you are not eligible to register( age above 18)")
    }
}