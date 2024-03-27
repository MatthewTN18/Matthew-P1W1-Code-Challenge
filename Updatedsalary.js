// The following function calculates the gross salary
let basicSalary;
let benefits;
let grossSalary;

function getGrossSalary(basicSalary, benefits) {
    grossSalary = basicSalary + benefits
    return grossSalary
}


let deduction; //This represents NHIFDeductions.

// The following function uses the gross salary to determine the NHIFDeductions
function nhifDeductions(grossSalary){

    if (grossSalary < 6000) {
    deduction = 150;
    return deduction;
}
else if (grossSalary >=6000 && grossSalary< 8000) {
    deduction = 300;
    return deduction;
}
else if (grossSalary >= 8000 && grossSalary< 12000) {
    deduction = 400;
    return deduction;
}
else if (grossSalary >=12000 && grossSalary< 15000) {
    deduction = 500;
    return deduction;
}
else if (grossSalary >= 15000 && grossSalary< 20000) {
    deduction = 600;
    return deduction;    
} 
else if (grossSalary >= 20000 && grossSalary< 25000) {
    deduction = 750;
    return deduction;
}
else if (grossSalary >= 25000 && grossSalary< 30000) {
    deduction = 850;
    return deduction;
}
else if (grossSalary >= 30000 && grossSalary< 35000) {
    deduction = 900;
    return deduction;
}
else if (grossSalary >= 35000 && grossSalary< 40000) {
    deduction = 950;
    return deduction;
}
else if (grossSalary >= 40000 && grossSalary< 45000) {
    deduction = 1000;
    return deduction;

}
else if (grossSalary >= 45000 && grossSalary< 50000) {
    deduction = 1100;
    return deduction;
}
else if (grossSalary >= 50000 && grossSalary< 60000) {
    deduction = 1200;
    return deduction;
}
else if (grossSalary >= 60000 && grossSalary< 70000) {
    deduction = 1300;
    return deduction;
}
else if (grossSalary >= 70000 && grossSalary< 80000) {
    deduction = 1400;
    return deduction;
}
else if (grossSalary >= 80000 && grossSalary< 90000) {
    deduction = 1500;
    return deduction;
}
else if (grossSalary >= 90000 && 100000) {
    deduction = 1600;
    return deduction;
}
else if (grossSalary >= 100000)  
{return 1700}
}

console.log(nhifDeductions(12000000000000))
console.log(getGrossSalary(12, 3))



