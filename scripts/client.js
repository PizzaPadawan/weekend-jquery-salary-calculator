$(function(){
    //click handler for submitting an employee to the table
   $("#submitButton").on('click', addEmployee) 
   //click handler with descendant selector for deleting employee table row
   $("#employeeTable tbody").on('click', '.deleteButton', deleteEmployee)
})

// monthlyCost global variable to be added and subtracted from to reflect totalMonthly
let monthlyCost = 0;


function addEmployee(){
// we need to append input values to the employeeTable
// but only if all fields are filled in
// here's an if statment to throw an alert if any field is left blank
    if($("#firstName").val() === '' ||
        $("#lastName").val() === '' ||
        $("#employeeNumber").val() === '' ||
        $("#employeeTitle").val() === '' ||
        $("#annualSalary").val() === ''){
        alert("Please fill out all fields");
    } else {
    // appending input values and delete button with a class to table body
    // STRETCH: Adding salary class to applicable td for decrement function
    $("#employeeTable tbody").append(`
    <tr>
        <td>${$("#firstName").val()}</td>
        <td>${$("#lastName").val()}</td>
        <td>${$("#employeeNumber").val()}</td>
        <td>${$("#employeeTitle").val()}</td>
        <td class="salary">${$("#annualSalary").val()}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>
    `)
    $(".salary")
    // adding the monthly salary to our monthlyCost global variable
     monthlyCost += (Math.round(Number($("#annualSalary").val() / 12)))
    // emptying inputs
    $("#firstName").val('')
    $("#lastName").val('')
    $("#employeeNumber").val('')
    $("#employeeTitle").val('')
    $("#annualSalary").val('')
    }
    //run showTotal function to reflect addition to monthlyCost 
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

    // if statement to turn totalMonthly text red if monthlyCost is greater than
    if(monthlyCost > 20000){
        $("#totalMonthly").css("color", "crimson");
        
    } else $("#totalMonthly").css("color", "black")
}

function deleteEmployee(event){
    // STRETCH: find the text in salary class of the closest table row,
    // convert it to a number, divide it by 12,
    // and decrement the value from monthlyCost
    monthlyCost -= Math.round(Number($(event.target).closest("tr").find("td.salary").text()/12))
    // STRETCH: run showTotal function to reflect subtraction from monthlyCost
    showTotal();
    //target the closest table row to the targeted event and remove it.
    $(event.target).closest("tr").remove();
}


