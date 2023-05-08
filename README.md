# Salary Calculator

## Description

*This is my first weekend project for Tier 2 of Emerging Digital Academy.*

This salary calculator web app will allow the user to add employee data to a table 
and calculate a total monthly cost for paying employees' salaries.

Simply submit all employee's details one at a time and get
a live look at total monthly cost as you add and remove employees from the table,
alerting the user with red text if over a budget of $20,000.

## Usage

1. Input employee First Name, Last Name, ID, Title, and Annual Salary fields
2. Click "Submit" button.

The "Total Monthly" section will update to reflect the total with every employee change,
whether added or deleted.

## TO DO:

The following is the checklist I used for reference when working on this project.

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
- [x] STRETCH: Make it STYLIN. Vaporwave / Windows 98 theme, anyone?

## Support

If you have any issues or questions with this page, please email me at [kord.r.maurer@gmail.com](kord.r.maurer@gmail.com)