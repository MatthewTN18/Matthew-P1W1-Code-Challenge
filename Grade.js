// Prompting input of marks
let marks = prompt("Enter student marks between 0 and 100");

//Determining grade
let grade ;
if (marks > 79) {
    grade = `A`;
}
else if(marks >= 60 && marks <= 79) {
    grade = `B`;
}
else if(marks >= 50 && marks <= 59) {
    grade = `C`;
}
else if (marks = >= 40 && marks <= 49) {
    grade = `D`;
}
else { grade = `E`; }

//Grade output
console.log("Grade" , grade);