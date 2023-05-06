$(function(){
   $("#submitButton").on('click', addEmployee) 
   $("#employeeTable tbody").on('click', '.deleteButton', deleteEmployee)
})

//adding a global array to store salaries
let employeeSalaries = []
let monthlyCost = 0;
let salaryId = 0;

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
        // adding annualSalary values to an array
        // may be more useful for totalMonthly calculation
        employeeSalaries.push(Math.round(Number($("#annualSalary").val() / 12)));
    // appending input values to the employeeTable
    // STRETCH: Adding salary class to applicable td for decrement function
    $("#employeeTable tbody").append(`
    <tr>
        <td>${$("#firstName").val()}</td>
        <td>${$("#lastName").val()}</td>
        <td>${$("#employeeNumber").val()}</td>
        <td>${$("#employeeTitle").val()}</td>
        <td class="salary" data-salary="${salaryId}">${$("#annualSalary").val()}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>
    `)
     monthlyCost += (Math.round(Number($("#annualSalary").val() / 12)))
    // emptying inputs
    $("#firstName").val('')
    $("#lastName").val('')
    $("#employeeNumber").val('')
    $("#employeeTitle").val('')
    $("#annualSalary").val('')
    }
    salaryId ++
    showTotal();
}

function showTotal(){
    // we need to access each #annualSalary in the table,
    // divide it by 12, add it to a global variable,
    // and append it to the totalMonthly span.

    // ** tried a for loop and that didn't work because duh
    // gonna throw the dividing and adding functions into
    // addEmployee function
    $("#totalMonthly").text(`$${monthlyCost}.00`);

    if(monthlyCost > 20000){
        $("#totalMonthly").css("color", "red");
    }
}

function deleteEmployee(event){
    // for (let i = 0; i < employeeSalaries.length; i++){
    //     if($(event.target).closest("td .salary").data("salary") === ){
    //         monthlyCost -= employeeSalaries[i];
    //     }
    // }
    monthlyCost -= (Number($(event.target).closest("tr").find("td.salary").text()) / 12)
    salaryId --
    showTotal();
    $(event.target).closest("tr").remove();
}


