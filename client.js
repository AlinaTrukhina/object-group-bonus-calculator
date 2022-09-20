// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let bodyContent = document.getElementById('header');

function main(){
  bodyContent.innerHTML = 'Hello World';
  return;
}

function calculateAllEmployeeBonuses(){
  bodyContent.innerHTML = '';
  for (let i = 0; i < employees.length; i++){
    console.log(employees[i]);
    let bonuses = calculateIndividualEmployeeBonus(employees[i]);
    bodyContent.innerHTML += `${bonuses.name} has a total compensation bonus of ${bonuses.totalBonus} with a percentage of ${Math.floor((bonuses.bonusPercentage-1)*100)}% which totals ${bonuses.totalCompensation} </br>`
  } 
}
//alert(employeeBonus);

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  const employeeBonus = {
    name : employee.name,
    bonusPercentage : 0,
    totalCompensation : 0,
    totalBonus : 0
  }
  const bonusArray = [1, 1, 1.04, 1.06, 1.1];
  console.log(bonusArray[employee.reviewRating-1]);
  employeeBonus.bonusPercentage = bonusArray[employee.reviewRating-1];
  
  if (employee.employeeNumber.length === 4) {
    employeeBonus.bonusPercentage += 0.05;
  }
//  console.log(employeeBonus.bonusPercentage);

  if (employee.annualSalary > 65000) {
    employeeBonus.bonusPercentage -= 0.01;
  }


  if (employeeBonus.bonusPercentage < 1) {
    employeeBonus.bonusPercentage = 1;
  }

  if (employeeBonus.bonusPercentage > 1.13) {
    employeeBonus.bonusPercentage = 1.13;
  }
//  console.log(employeeBonus.bonusPercentage);
  // return new object with bonus results
  employeeBonus.totalBonus = Math.floor(employee.annualSalary * (employeeBonus.bonusPercentage - 1));
//  console.log('employeeBonus', employeeBonus.totalBonus);

  employeeBonus.totalCompensation = Number(employee.annualSalary) + employeeBonus.totalBonus;
//  console.log('totalCompensation', employeeBonus.totalCompensation);

console.log(employeeBonus);

return(employeeBonus);

}

//document.getElementById("header").innerHTML = 'hi';
//console.log(calculateIndividualEmployeeBonus();
