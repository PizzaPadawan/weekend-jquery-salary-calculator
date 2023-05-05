$(function(){
   $("#submitButton").on('click', addEmployee) 
})

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

    $("#firstName").val('')
    $("#lastName").val('')
    $("#employeeNumber").val('')
    $("#employeeTitle").val('')
    $("#annualSalary").val('')
    }
}