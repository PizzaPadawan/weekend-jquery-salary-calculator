# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This salary calculator will allow you to add employee data to a table 
and calculate a total monthly cost for paying employees' salaries.

Simply submit all employee's details one at a time and get
a live look at total monthly cost as you add and remove employees from the table,
alerting the user with red text if over a budget of $20,000.

## TO DO:

HTML:
- [x] "Salary Calculator" header section
- [x] "Add Employee" section with inputs for First Name, Last Name, ID, Title, and Annual Salary, along with a Submit button
- [x] "Employees" table with the above listed data as th columns in thead
- [x] "Total Monthly" with span to keep track of total monthly cost

JS:
- [x] Add click event to add input.vals to employee table on submitButton click, along with a delete button for each row
- [x] Add alert to fire if user attempts to submit with any inputs left blank
- [x] Clear inputs after submitButton click event
- [x] Activate delete button via descendent selector
- [x] Calculate monthly costs in annualSalary field and append the amount to Total Monthly span
- [x] Format Total Monthly span to turn red if amount is > 20,000
- [x] STRETCH: Update the Total Monthly span to decrement once an employee is deleted.

CSS: 
- [x] STRETCH: Make it STYLIN. I'm thinking 90's office chic. [unsplash](https://unsplash.com/) for images. Maybe a Windows 98 theme?