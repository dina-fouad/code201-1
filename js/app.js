'use strict';
let sum =0
function checkName(){
let inputName = prompt('whats your name?')
   alert('Welcome to my site ,'+inputName+'') ;
}
checkName();


function checkLanguage(){
let inputLanguage = prompt ('Did i study French language?').toLocaleLowerCase() ;

if (inputLanguage === 'yes' || inputLanguage ==='y'){
alert('Correct answer , I studied French Language & Literature from The University Of Jordan') ;
sum++
console.log('Correct answer , I studied French Language & Literature from The University Of Jordan') ;
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
alert('Correct answer , I know little bit') ;
sum++
console.log('Correct answer , I know little bit') ;
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
console.log('Correct answer , I worked as a reservation agent') ;
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
  sum++
alert('wrong answer') ;
} else if (inputDate === 'no' || inputDate ==='n'){
alert('Correct answer , I graduated in 2015');
console.log('Correct answer , I graduated in 2015') ;
}else {
   alert('please enter yes or no') ;
}
}
checkDate();

function checkFood(){
let inputFood = prompt ('Do i like Burger?').toLocaleLowerCase() ;

if (inputFood === 'yes' || inputFood ==='y'){
  sum++
alert('wrong answer') ;
} else if (inputFood === 'no' || inputFood ==='n'){
alert('Correct answer , I dont like it, Thank you for answering '+inputName+'');
console.log('Correct answer , I dont like it, Thank you for answering '+inputName+'') ;
}else {
   alert('please enter yes or no , Thank you for answering '+inputName+'') ;
}
}
checkFood();



function checkLocation(){

  let arrayName= ['paris','maldive', 'istanbul','rome','london','Amman',''];
  let inputPlace= ''
  
for (let y=0 ; y<6 ;y++){
  
     inputPlace = prompt('what is the best places to visit?');
<<<<<<< HEAD
     for (let x =0; x< arrayName.length;x++){
=======
     for (let x =0; x<arrayName.length;x++){
>>>>>>> f73ec8ef600921f201020ad224d3737cb5cb79e3
     if(inputPlace == arrayName[x]){
       sum++
        alert('correct')
         y=6
         break;
     }
    }if (y==5) {
        alert('the answer are '+ arrayName)
    }else if (y<6){
      alert('your answer is wrong');
    }
}
}
<<<<<<< HEAD

checkLocation();

function checkNumber(){
  
=======
}
checkLocation();

function checkNumber(){
  console.log('checkNumber');
>>>>>>> f73ec8ef600921f201020ad224d3737cb5cb79e3
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


<<<<<<< HEAD
=======


>>>>>>> f73ec8ef600921f201020ad224d3737cb5cb79e3

alert('your score is '+sum+'of 7')