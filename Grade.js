// The following function ensures the score only allows values between 0 and 1-00

function limit(score) {
    if (score >= 0 && score <= 100){
        return grade(score)
    }
    else {return "Invalid Score"}
}
// Function that returns apt grade according to score
function grade(score){
if (score > 79) {
    return grade = `A`;
}
else if(score >= 60 && score <= 79) {
    return grade = `B`;
}
else if(score >= 50 && score <= 59) {
    return grade = `C`;
}
else if (score >= 40 && score <= 49) {
    return grade = `D`;
}
else { return grade = `E`; }
}

// Here's an example of the program in action: Using score of 78
console.log(grade(78));
