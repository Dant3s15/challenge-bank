const btnHamburger =document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
btnHamburger.addEventListener('click', function() {
    console.log('open hamburger');

    if(header.classList.contains('open')){ //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade=in')
            element.classList.add('fade-out');
        });

    }
    else{ //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        
     
    }

    
});










// var r =10,d=10 ,S, c, pomoc;
// pomoc=(r*r) -((d/2)*(d/2));
// S=3.141592654*(pomoc);
// console.log(S);
// var tekst = "zobaczymy";
// for (i=tekst.length-1;i>=0;i--)
// {

//     console.log(tekst[i]);
 
//     // for (j=1;j<10;j++)
//     // {
//     //     console.log(j-i);
//     // }
// }
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
// {
//     var result ="";
//     result += "The " + myAdjective + " "+ myNoun + " "+ myVerb + " to the store " + myAdverb;

//     return result;
// }
// var ourArray =["test", "testowy", "testa"];
// ourArray.push("tests a");
// var test=3;

// function trueOrNot(test)
// {
//     if (test>0)
//     {
//         //return "YES";
//         console.log("more than zero");
//     }
//     else if(test<0)
//     console.log("less than 0");
//     else
//         // return "NO";
//         console.log("it's 0");

    
// }
// trueOrNot(test);

// function testowanie(test){
//     if (test<10 && test>0)
//     {
//         return "od 0 do 10";
//     }

    
//         return "inne";
    
// }
// console.log(testowanie(test));


// function switchowanie(val){
//     var answer = "";
//     switch(val){
//         case 1: 
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//          default:
//              answer = "błąd"
//     }

//     return answer;
// }
// console.log(switchowanie())