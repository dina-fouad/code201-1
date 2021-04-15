'use strict';
let sum =0
function checkName(){
let inputName = prompt('whats your name?')
   alert('Welcome to my site ,'+inputName+'') ;
   alert('About Me, with a guessing game , are you ready?')
}
checkName();


function checkLanguage(){
let inputLanguage = prompt ('Did i study French language?').toLocaleLowerCase() ;

if (inputLanguage === 'yes' || inputLanguage ==='y'){
alert('Correct answer , I studied French Language & Literature from The University Of Jordan') ;
sum++

} else if (inputLanguage === 'no' || inputLanguage ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}
}
checkLanguage();


function checkInput(){
let input = prompt ('Did i know Hebrew?').toLocaleLowerCase() ;

if (input === 'yes' || input ==='y'){
alert('Correct answer , I know a little bit') ;
sum++

} else if (input === 'no' || input ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}
}
checkInput();

function checkWork(){
let inputWork = prompt ('Did i work in toursim company?').toLocaleLowerCase() ;

if (inputWork === 'yes' || inputWork ==='y'){
  sum++
alert('Correct answer , I worked as a reservation agent') ;

} else if (inputWork === 'no' || inputWork ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}
}
checkWork();

function checkDate(){

let inputDate = prompt ('Did I graduate in 2017?').toLocaleLowerCase() ;

if (inputDate === 'yes' || inputDate ==='y'){
  
alert('wrong answer') ;
} else if (inputDate === 'no' || inputDate ==='n'){
alert('Correct answer , I graduated in 2015');
sum++
}else {
   alert('please enter yes or no') ;
}
}
checkDate();

function checkFood(){
let inputFood = prompt ('Do i like Grand chicken Burger?').toLocaleLowerCase() ;

if (inputFood === 'yes' || inputFood ==='y'){
  
alert('wrong answer') ;
} else if (inputFood === 'no' || inputFood ==='n'){
alert('Correct answer , I dont like it, Thank you for answering ');
sum++

}else {
   alert('please enter yes or no , Thank you for answering') ;
}
}
checkFood();



function checkLocation(){

  let arrayName= ['paris','maldives', 'istanbul','rome','london','Mecca'];
  let inputPlace= ''
  
for (let y=0 ; y<6 ;y++){
  
     inputPlace = prompt('what is the best places to visit?');
     for (let x =0; x< arrayName.length;x++){
     if(inputPlace == arrayName[x]){
       sum++
        alert('correct')
         y=6
         break;
     }
    }if (y==5) {
        alert('the answers are = '+ arrayName)
    }else if (y<6){
      alert('your answer is wrong');
    }
}
}

checkLocation();


function checkNumber(){
  
  for (let i=0 ; i<4 ; i++){

      let inputNumber = prompt('Guess the secret number in the magicians hat');
    if(inputNumber==5){
      sum++
          alert('too high') ;
          break
  }else {
        alert('too low ') ;
  }
  
  }
  alert ('The correct answer is 5')
  }
  checkNumber();



alert('your score is '+sum+'of 7')