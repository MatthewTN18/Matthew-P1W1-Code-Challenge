// We are working with monthly pay;

let basicSalary;
let benefits;

// Here we are getting the gross salary;
const grossSalary = function() {
    basicSalary + benefits
}

let deduction; //This represents NHIFDeductions.

if (grossSalary < 6000) {
    deduction = 150;
}
else if (grossSalary >=6000 && < 8000) {
    deduction = 300;
}
else if (grossSalary >= 8000 && < 12000) {
    deduction = 400;
}
else if (grossSalary >=12000 && < 15000) {
    deduction = 500;
}
else if (grossSalary >= 15000 && < 20000) {
    deduction = 600;
} 
else if (grossSalary >= 20000 && < 25000) {
    deduction = 750;
}
else if (grossSalary >= 25000 && < 30000) {
    deduction = 850;
}
else if (grossSalary >= 30000 && < 35000) {
    deduction = 900;
}
else if (grossSalary >= 35000 && < 40000) {
    deduction = 950;
}
else if (grossSalary >= 40000 && < 45000) {
    deduction = 1000;
}
else if (grossSalary >= 45000 && < 50000) {
    deduction = 1100;
}
else if (grossSalary >= 50000 && < 60000) {
    deduction = 1200;
}
else if (grossSalary >= 60000 && < 70000) {
    deduction = 1300;
}
else if (grossSalary >= 70000 && < 80000) {
    deduction = 1400;
}
else if (grossSalary >= 80000 && < 90000) {
    deduction = 1500;
}
else if (grossSalary >= 90000 && 100000) {
    deduction = 1600;
}
else (grossSalary >= 100000) {
    deduction = 1700
}

let deduction2; // This represents NSSFDeductions

if (grossSalary * 0.12 < 7000) {
    deduction2 = grossSalary * 0.12
}
else {deduction2 = 7000}

// Now the NHIF and NSSF are added together
const totalDeductions = deduction + deduction2 

const taxablePay = grossSalary - totalDeductions //This gives the taxable pay; the money that will then be subjected to payee taxation.

let payee;

if (taxablePay <= 24000) {
    payee = 0.1 * taxablePay
}
else if (taxablePay > 24000 && <= 32333) {
    payee = 0.25 * taxablePay
}
else if (taxablePay > 32333 && <= 500000) {
    payee = 0.3 * taxablePay
}
else if (taxablePay > 500000 <= 800000) {
    payee = 0.325 * taxablePay
}
else if (taxablePay > 800000) {
    payee = 0.35 * taxablePay
}

const netSalary = taxablePay - payee //Finally we deduct the payee from the taxable pay to ontain the Net Salary!




