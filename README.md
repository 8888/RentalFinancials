# RentalFinancials
This uses a basic HTML interface to take user input and display the results of financial and investment calculations. While the user interface is designed towards real estate investments, the functions in rentalFinancials.js are generic and can be used for any type of investments. 

# Features
The are calculation functions for the following financial calculations:
-Future value of an annuity
-Present value of a single, future amount
-Present value of an annuity
-Payments required to achieve a specific present value
-Internal rate of return

# Design and usage
The user interface, [index.html](https://betterin30days.github.io/RentalFinancials/), allows the user to changes the values of set values and the calculates are updated in real time. The output is specific to a user modifiable rent price. User input is first gathered from the DOM and validated. This information is passed into an object to avoid any contact with the DOM during calcuations. A final function, to again cleanly seperate the different aspects of the program, pushed the calculated valeues to the display. Javascript event listeners are added to the HTML input boxes. These act as the controllers between the DOM and the calculation functions in rentalFinancials.js. 

# Testing
Tests were written before each calculation function to ensure proper output. [test/test.html](https://betterin30days.github.io/RentalFinancials/test/test) displays the lists of tests including the tested function, test name, arguments, expedted output, actual output, and a color-coded test result. 

# Screen Shots
Interface<br>
<img src="https://github.com/betterin30days/betterin30days.github.io/blob/master/rentalfinancials/screenshots/index.PNG"><br>

Tests<br>
<img src="https://github.com/betterin30days/betterin30days.github.io/blob/master/rentalfinancials/screenshots/tests.PNG"><br>
