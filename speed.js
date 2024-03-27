



function demeritPoints(speed){
   
   return points
}


function output(speed){
let points = Math.floor((speed - 70) / 5)
    
if (speed <= 70) {
    return "Ok"}

    else if(points <= 12)
    {return `Points: ${points}`
    }
    else if 
(points > 12)
{return "License suspended"
    }
}

//Here's an example of the program in action: 
console.log(output(120))
