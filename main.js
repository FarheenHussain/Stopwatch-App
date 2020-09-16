var initState = {
    hr : '00',
    min : '00',
    sec : '00'
};

var state = initState;


var start = document.querySelector('.start');
var pause = document.querySelector('.pause');
var reset = document.querySelector('.reset');


// var startStopwatch = function () {
//     var unsubscribe = setInterval(init, 1000); // setInterval() ek value return karta hai.
//     return unsubscribe;
// }


//IIFE
var actionsHelper = ( function(){
    var unsubscribe;
    
    return{
        start(){
            unsubscribe = setInterval(init, 1000);
        },

        pause(){
            if(!unsubscribe) return;
            clearInterval(unsubscribe);
        }
    };

} )();



start.addEventListener('click', function(){
    actionsHelper.start();
});

pause.addEventListener('click', function(){
    actionsHelper.pause();
});

reset.addEventListener('click', function(){
    
    actionsHelper.pause();
    updateTimer(initState);
});








function format(val){
    if( val >= 0 && val <= 9 ) return '0' + val; //Concatenation
    else return `${val}`;  // Ye wala jab DOM ko jayega,toh as such string ko jayega, even if it's a number.
}

function nextTick( {hr, min, sec} ){

    //var newState = {}; //ini 
    // newState initially empty hai, baad mein hr, min, sec ki value store kar ke rakkhenge
    
    if( sec === '59' ){

        /// === checks for same datatype also.

        sec = '00';
        
        if(min === '59'){
            min = '00';
            hr = format(++hr);  // Increment operator is a mathematical operator.
        }          // So it will give a number as its output, even if one of the operands is a string.

        else{
            min = format(++min);
        }
    }

    else{
        sec = format(++sec);
    }


    return {
        hr,
        min,
        sec
        //hr: format(hr),
        //min: format(min),
        //sec: format(sec)
    };

}


// So we use IIFE expression--


// Jaise hi ye file load hogi, ye function run hoga
// And isme woh value assign hogi, jo return hoga uss function se
var updateTimer = ( function(){
    
    var hrRef = document.querySelector('.hr');
    var minRef = document.querySelector('.min');
    var secRef = document.querySelector('.sec');

    return function({ hr, min, sec }){
        hrRef.textContent = hr;
        minRef.textContent = min;
        secRef.textContent = sec;


        // The contents of .hr, .min & .sec  are updated with the values returned 
        // by function nextTick().

    }


} )();

// init() ek naya state dega jo 1 second ke baad honi chahiye.
function init(){
    // newState = nextTick(state) will be the same as- reassigning the value to 'state'
    state = nextTick(state);  // init() nayi state ko call karega. 
    updateTimer(state);  // ..and update bhi karega(all states after initialisation)
}
// So init() ko harr ek ek second mein call kar dena hai



// // We use a named IIFE -
// (function start(){
//     setTimeout(function () {
//         init();
//         start();
//     }, 1000); // It will execute init() after 1 second. init() will run only once.
// } )();



updateTimer(state);   // initialising the 00:00:00 state 