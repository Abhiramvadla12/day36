var gpa = Number(prompt("enter your gpa here :"));
var activies = prompt('enter the extracurricular like ncc ,sports,cultural events and none :');
var activies1 = prompt('enter the extracurricular like ncc ,sports,cultural events and none :');
var Service = Number(prompt('enter commmunity hours :'))
if(gpa < 0){
    console.log("please enter valid gpa or positive values");
}
else if(activies !='ncc' && activies!='sports' && activies!='cultural events' && activies!='none'){
    console.log("please enter a valid extracurricular actives ");
}
else if(Service < 0){
    console.log("enter a valid hours or positive number");
}
else{
    if(gpa >=3.5){
        console.log("you are eligible for merit based scholarship");
    }
    if(gpa >=3.0 && ((activies =='ncc' && activies1=='sports')||(activies =='ncc'&& activies1=='cultural events')||(activies=='sports'&&activies1=='cultural events'))){
        console.log("you are  eligible for Leadership Scholarship ");
    }
    if(gpa >=2.5 && Service >= 100){
        console.log("you are eligible for Community Service Scholarship");
    }
}
