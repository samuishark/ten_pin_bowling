'use strict'


/* if/else
function calculateScore(throws){
    var total = 0, j = throws.length;
    for (var i=0; i<(j-1); i++) {
        if (i === 18 && throws[i] === 10)  {
            throws[i] += throws[i+1] += throws[i+2];throws[i+1] = 0;
        }
        else if (throws[i] === 10 && throws[i+2] === 10) {
            throws[i] += throws[i+2] + throws[i+4];
        }
        else if (throws[i] === 10)   {
            throws[i] += throws[i+2] + throws[i+3];
        }
        else if (throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10) {
            throws[i] += throws[i+1] + throws[i+2];throws[i+1] = 0;
        }
        else {
            throws[i+1] == throws[i+1];
        }
        total += throws[i];
    }
    return total;
}
*/

/*/ switch + functions


function calculateScore(throws){

    function finalFrameStrike() {
        return throws[i] += throws[i+1] += throws[i+2], throws[i+1] = 0;
    }
    function double()   {
        return throws[i] += throws[i+2] + throws[i+4];
    }
    function strike()   {
        return throws[i] += throws[i+2] + throws[i+3];
    }
    function spare()    {
        return throws[i] += throws[i+1] + throws[i+2], throws[i+1] = 0;
    }

    var total = 0, j = throws.length;
    
    for (var i=0; i<(j-1); i++) {
        switch(true)  {
            case i === 18 && throws[i] === 10:
                    finalFrameStrike();
                    break;
            case throws[i] === 10 && throws[i+2] === 10:
                    double();
                    break;
            case throws[i] === 10:
                    strike();
                    break;
            case throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10:
                    spare();
                    break;
            default:
                    throws[i+1] == throws[i+1];
        }

        total += throws[i];
    }
    return total;
    
}
*/

/*
function calculateScore(throws){
    var total = 0, j = throws.length;
    

    function isFinalFrameStrike() {
        return (i === 18 && throws[i] === 10 ? finalFrameStrike() : isDouble());
    }
    function isDouble()    {
        return (throws[i] === 10 && throws[i+2] === 10? double() : isStrike());
    }
    function isStrike()    {
        return (throws[i] === 10 ? strike(): isSpare());
    }
    function isSpare()     {
        return (throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10 ? spare() : throws[i+1] == throws[i+1]);
    }
    function finalFrameStrike() {
        return throws[i] += throws[i+1] += throws[i+2],throws[i+1] = 0;
    }
    function double()   {
        return throws[i] += throws[i+2] + throws[i+4];
    }
    function strike()   {
        return throws[i] += throws[i+2] + throws[i+3];
    }
    function spare()    {
        return throws[i] += throws[i+1] + throws[i+2],throws[i+1] = 0;
    }
    for (var i=0; i<(j-1); i++) {
        isFinalFrameStrike(i);
        total += throws[i];
    }

    return total;
}

*/

function Frame(throw1, throw2)  {
    this.throwOne = throw1;
    this.throwTwo = throw2;
}

function isFinalFrameStrike(x,y)  {
    return x === 18 && y === 10;
}
function isDouble(x,y)    {
    return x === 10 && y === 10;    
}
function isStrike(x)    {
    return x === 10;
}
function isSpare(x,y)   {
    return x < 10 && y < 10 && x + y === 10;
}
function finalFrameStrike(x,y,z) {
     return x + y + z;
}
function double(x,y,z)   {
     return x + y + z;
}
function strike(x,y,z)   {
     return x + y + z;
}
function spare(x,y,z)    {
     return x + y + z;
} 
function normal(x,y)    {
     return x + y;
}   

function calculateScore(throws){
    var total = 0, j = throws.length;
    
    for (var i=0; i<(j-1); i++) {
        switch(true)  {
            case isFinalFrameStrike(i, throws[i]):
                    finalFrameStrike(throws[i], throws[i+1], throws[i+2]);
                    break;
            case isDouble(throws[i],throws[i+2]):
                    double(throws[i], throws[i+2], throws[i+4]);
                    break;
            case isStrike(throws[i]):
                    strike(throws[i], throws[i+2], throws[i+3]);
                    break;
            case isSpare(throws[i], throws[i+1]):
                    spare(throws[i], throws[i+1], throws[i+2]);
                    break;
            default:
                    normal(throws[i],throws[i+1]);
        }
    }
    
}

function calculateTotal(frames){
    var total = 0, k = frames.length;
    for (var l=0; l<(k-3); l+=2)    {
        total += frames[l];
}
return total;
}



module.exports.calculateScore = calculateScore;
module.exports.calculateTotal = calculateTotal;
/*module.exports.finalFrameStrike = finalFrameStrike;
module.exports.double = double;
module.exports.strike = strike;
module.exports.spare = spare;
module.exports.isFinalFrameStrike = isFinalFrameStrike;
module.exports.isDouble = isDouble;
module.exports.isStrike = isStrike;
module.exports.isSpare = isSpare;
*/
