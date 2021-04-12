'use strict'

let inputName = prompt('whats your name?')
   alert('Welcome to my site ,'+inputName+'') ;


let inputLanguage = prompt ('Did i study French language?').toLocaleLowerCase() ;

if (inputLanguage === 'yes' || inputLanguage ==='y'){
alert('Correct answer , I studied French Language & Literature from The University Of Jordan') ;
//console.log('Correct answer , I studied French Language & Literature from The University Of Jordan') ;
} else if (inputLanguage === 'no' || inputLanguage ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}

let input = prompt ('Did i know Hebrew?').toLocaleLowerCase() ;

if (input === 'yes' || input ==='y'){
alert('Correct answer , I know little bit') ;
//console.log('Correct answer , I know little bit') ;
} else if (input === 'no' || input ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}


let inputWork = prompt ('Did i work in toursim company?').toLocaleLowerCase() ;

if (inputWork === 'yes' || inputWork ==='y'){
alert('Correct answer , I worked as a reservation agent') ;
//console.log('Correct answer , I worked as a reservation agent') ;
} else if (inputWork === 'no' || inputWork ==='n'){
alert('wrong answer');
}else {
    alert('please enter yes or no') ;
}

let inputDate = prompt ('Did I graduate in 2017?').toLocaleLowerCase() ;

if (inputWork === 'yes' || inputWork ==='y'){
alert('wrong answer') ;
} else if (inputWork === 'no' || inputWork ==='n'){
alert('Correct answer , I graduated in 2015');
//console.log('Correct answer , I graduated in 2015') ;
}else {
    alert('please enter yes or no') ;
}

let inputFood = prompt ('Do i like Burger?').toLocaleLowerCase() ;

if (inputFood === 'yes' || inputFood ==='y'){
alert('wrong answer') ;
} else if (inputFood === 'no' || inputFood ==='n'){
alert('Correct answer , I dont like it, Thank you for answering '+inputName+'');
//console.log('Correct answer , I dont like it, Thank you for answering '+inputName+'') ;
}else {
    alert('please enter yes or no , Thank you for answering '+inputName+'') ;
}