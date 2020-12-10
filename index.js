// sets variable to i
let i; 
// loops through incrimenting 'i' looking for any #'s divisable by 3 and 5 and calls it buzzfizz
for (i=1; i<101; i++) {
    if (i%3==0&&i%5==0){
      document.querySelector("#onScreen").innerHTML += "BuzzFizz <br>" ;
    }
    // loops looking for #'s only divisable by 3 and calls them buzz
    else if(i%3==0){
        document.querySelector("#onScreen").innerHTML += "Buzz <br>" ;
    }
    // loops looking for #'s divisable by 7 and calls them fizz
    else if(i%7==0){
        document.querySelector("#onScreen").innerHTML += "Fizz <br>" ;
    }
    // prints out all other incrimented numbers to screen
    else{
    document.querySelector("#onScreen").innerHTML += (i) + "<br>";
    }
}