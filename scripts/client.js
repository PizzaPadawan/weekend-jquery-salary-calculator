$(function(){
   $("#submitButton").on('click', addEmployee) 
})

//adding a global array to store salaries
let employeeSalaries = []
let monthlyCost = 0;

function addEmployee(){
// we need to append input values to the employeeTable
// but only if all fields are filled in

    if($("#firstName").val() === '' ||
        $("#lastName").val() === '' ||
        $("#employeeNumber").val() === '' ||
        $("#employeeTitle").val() === '' ||
        $("#annualSalary").val() === ''){
        alert("Please fill out all fields");
    } else {
    
    // appending input values to the employeeTable
    $("#employeeTable tbody").append(`
    <tr>
        <td>${$("#firstName").val()}</td>
        <td>${$("#lastName").val()}</td>
        <td>${$("#employeeNumber").val()}</td>
        <td>${$("#employeeTitle").val()}</td>
        <td>${$("#annualSalary").val()}</td>
    <td><button id="deleteButton">Delete</button></td>
    </tr>
    `)
    employeeSalaries.push(Number($("#annualSalary").val() / 12));
    monthlyCost += Math.round(Number($("#annualSalary").val() / 12));
    // emptying inputs
    $("#firstName").val('')
    $("#lastName").val('')
    $("#employeeNumber").val('')
    $("#employeeTitle").val('')
    $("#annualSalary").val('')
    }

    calculateTotal();
}

function calculateTotal(){
    // we need to access each #annualSalary in the table,
    // divide it by 12, add it to a global variable,
    // and append it to the totalMonthly span.
    // tried a for loop and that didn't work because duh
    // gonna throw the dividing and adding functions into
    // addEmployee function
    $("#totalMonthly").text(monthlyCost);

    if(monthlyCost > 20000){
        $("#totalMonthly").css("color", "red");
    }
}