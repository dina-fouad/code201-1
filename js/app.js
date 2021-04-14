'use strict';
let sum =0
let inputName = prompt('whats your name?')
   alert('Welcome to my site ,'+inputName+'') ;


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

let inputDate = prompt ('Did I graduate in 2017?').toLocaleLowerCase() ;

if (inputWork === 'yes' || inputWork ==='y'){
  sum++
alert('wrong answer') ;
} else if (inputWork === 'no' || inputWork ==='n'){
alert('Correct answer , I graduated in 2015');
console.log('Correct answer , I graduated in 2015') ;
}else {
   alert('please enter yes or no') ;
}

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


  let arrayName= ['paris','maldive', 'istanbul','rome','london',''];
  let inputPlace= ''
  
for (let y=0 ; y<6 ;y++){
  
     inputPlace = prompt('what is the best places to visit?');
     for (let x =0; x<arrayName.length;x++)
     if(inputPlace == arrayName[x]){
       sum++
        alert('correct')
         y=6
         break;
    }if (y==5) {
        alert('the answer are '+ arrayName)
    }else if (y<6){
      alert('your answer is wrong')
    }
}

alert('your score is '+sum+'of 7')