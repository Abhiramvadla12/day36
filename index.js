var memeberShip = prompt("enter the type of membership like basic membership or standard membership or premium membership :");
if( memeberShip == 'basic membership'){
    console.log(" you are eligible to Access to only free books");
}
else if(memeberShip == "standard membership"){
    console.log("you are eligible to Access to Access to free books and discounted paid books");
}
else if(memeberShip == 'premium membership'){
    console.log("you are eligible to Access to Access to all books, including exclusive content.")
}
else{
    console.log('please enter a valid membership mentioned above')
}