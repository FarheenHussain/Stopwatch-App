var state = {
    hr : 0,
    min : 0,
    sec : 0
};

function nextTick( {hr, min, sec} ){

    //var newState = {}; //ini 
    // newState initially empty hai, baad mein hr, min, sec ki value store kar ke rakkhenge
    
    if( sec === 59 ){

        sec = 0;
        
        if(min === 59){
            min = 0;
            hr++;
        }

        else{
            min++;
        }
    }

    else{
        sec++;
    }


    return {
        hr,
        min,
        sec
    }

}

// Ye function DOM se manipulate karega because usey time ki value rakkhni hai.
// And DOM se manipulate hone se zahir si baat hai ki impure ho jayega 
function updateTimer(){

    var hrRef = document.querySelector('.hr');
    var minRef = document.querySelector('.min');
    var secRef = document.querySelector('.sec');

    // Here, the values will be constantly redefined here every single time the code is run.

}