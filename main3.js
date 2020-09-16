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



// So, instead of keeping it inside the updateTimer() function and to avoid making the variables getting redefined every time,
// we can keep it globally, bahar--
var hrRef = document.querySelector('.hr');
var minRef = document.querySelector('.min');
var secRef = document.querySelector('.sec');
// But we have another problem here, global state pollute ho gayi because teen naye variables aa gaye -- hr, min, sec.

function updateTimer(){

   

    

}