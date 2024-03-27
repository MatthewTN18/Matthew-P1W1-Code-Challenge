// We are working with monthly pay;

let basicSalary = 800
let benefits = 100

// Here we are getting the gross salary;
let grossSalary
function getGrossSalary() {
   //grossSalary = basicSalary + benefits
   return grossSalary
}

let deduction; //This represents NHIFDeductions.

if (grossSalary < 6000) {
    deduction = 150;
}
else if (grossSalary >=6000 && grossSalary< 8000) {
    deduction = 300;
}
else if (grossSalary >= 8000 && grossSalary< 12000) {
    deduction = 400;
}
else if (grossSalary >=12000 && grossSalary< 15000) {
    deduction = 500;
}
else if (grossSalary >= 15000 && grossSalary< 20000) {
    deduction = 600;
} 
else if (grossSalary >= 20000 && grossSalary< 25000) {
    deduction = 750;
}
else if (grossSalary >= 25000 && grossSalary< 30000) {
    deduction = 850;
}
else if (grossSalary >= 30000 && grossSalary< 35000) {
    deduction = 900;
}
else if (grossSalary >= 35000 && grossSalary< 40000) {
    deduction = 950;
}
else if (grossSalary >= 40000 && grossSalary< 45000) {
    deduction = 1000;
}
else if (grossSalary >= 45000 && grossSalary< 50000) {
    deduction = 1100;
}
else if (grossSalary >= 50000 && grossSalary< 60000) {
    deduction = 1200;
}
else if (grossSalary >= 60000 && grossSalary< 70000) {
    deduction = 1300;
}
else if (grossSalary >= 70000 && grossSalary< 80000) {
    deduction = 1400;
}
else if (grossSalary >= 80000 && grossSalary< 90000) {
    deduction = 1500;
}
else if (grossSalary >= 90000 && 100000) {
    deduction = 1600;
}
else (grossSalary >= 100000)  
return 1700


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
else if (taxablePay > 24000 && taxablePay<= 32333) {
    payee = 0.25 * taxablePay
}
else if (taxablePay > 32333 && taxablePay<= 500000) {
    payee = 0.3 * taxablePay
}
else if (taxablePay > 500000 <= 800000) {
    payee = 0.325 * taxablePay
}
else if (taxablePay > 800000) {
    payee = 0.35 * taxablePay
}

const netSalary = taxablePay - payee //Finally we deduct the payee from the taxable pay to ontain the Net Salary!

console.log('GrossSalary:', grossSalary)
console.log('PAYE:', payee)
console.log('NHIF:', deduction)
console.log('NSSF:', deduction2)
console.log('Net Salary:', netSalary)




