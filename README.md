## Calculator App

The Calculator application allows you to perform simple mathematical operations and generate random strings. It serves as the frontend for the calculator, communicating with a backend via a REST API. The frontend is developed using React and hosted on an AWS S3 bucket. The application is available online at [http://calc.decooliveira.com.br](http://calc.decooliveira.com.br).

## Login

The login page requires users to provide their credentials for access. They need to enter their username (email) and a password with a minimum of 4 characters.

Username: admin@demo.com  
Password: admin

Alternatively, users can create a new account by clicking on the "Create Account" link.

## Sign Up

On this page, users can create a new account. They need to provide a valid email address as their username and choose a password with at least four characters.

Upon creating an account, users are allocated 200 credits to perform operations on the Calculator.

![Sign up](https://github.com/decooliveira/calculator-frontend/blob/master/docs/signup.png)

## Calculator

The Calculator application allows users to perform simple mathematical operations and generate random strings. It functions similar to a standard calculator, with the additional functionality that pressing the "S" key generates a random string of 14 characters and displays it.

Each operation performed incurs a specific credit cost, as outlined in the following table:

| Operation      | Credit Cost |
| -------------- | ----------- |
| Addition       | 2           |
| Subtraction    | 4           |
| Multiplication | 6           |
| Division       | 8           |
| Square Root    | 12          |
| Random String  | 20          |

![Calculator](https://github.com/decooliveira/calculator-frontend/blob/master/docs/calculator.png)

When users run out of credits, they can obtain more in the "Get Credits" section.

### Operations with large numbers

The maximum safe integer in JavaScript is Number.MAX_SAFE_INTEGER, which is 9007199254740991. When you enter a number greater than this value, such as "99999999916", it exceeds the maximum safe integer and gets rounded to the nearest representable number.

In this case, "99999999916" gets rounded to 1000000000000000. This happens because the number is too large to be accurately represented with the available precision.

This application is not applying any specialized library to handle arbitrary-precision arithmetic. However, large number results are represented in exponential format as the following example:

The `toExponential()` method in JavaScript can be used to represent a number in exponential notation with a specified number of digits after the decimal point. Here's the result of `999999999999999 * 999999999999999` using `toExponential(1)`:

Result: 1.0e+30

In this notation, the number is represented as 1.0 multiplied by 10 raised to the power of 30. The `toExponential(1)` method formats the number with one digit after the decimal point.

![Large number format](https://github.com/decooliveira/calculator-frontend/blob/master/docs/large_number.png)

## Records

The Records section lists all the operations performed by the user, displaying the result, operation type, and date. Users can click on the column titles to sort the records in ascending or descending order.

This page also offers filtering options and pagination settings.

![Records list](https://github.com/decooliveira/calculator-frontend/blob/master/docs/records.png)

## Get Credits

In this section any user can obtain more credits. Simply define an amount of credits and press "Get Credits" button.

![Get credits](https://github.com/decooliveira/calculator-frontend/blob/master/docs/credits.png)

## Logout

Clicking on the logout option ends the user session and redirects them to the login page.

The top of the page displays the available credit balance, which is updated after each operation.

## Running Locally

To run the application locally, execute the command `npm run dev` in the root folder. The app will be available at http://localhost:3001. To change the port number, edit the dev script in package.json file.

Please note that the backend site must also be running. Set the API_BASE_URL variable to your backend url config/apiConfig.ts file. To run the backend application locally, follow the instructions on this page to run the backend: [https://github.com/decooliveira/calculator-backend](https://github.com/decooliveira/calculator-backend)

**Note:** This documentation assumes familiarity with the development environment and necessary dependencies.
