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

When users run out of credits, they can obtain more in the "Get Credits" section.

## Records

The Records section lists all the operations performed by the user, displaying the result, operation type, and date. Users can click on the column titles to sort the records in ascending or descending order.

This page also offers filtering options and pagination settings.

## Logout

Clicking on the logout option ends the user session and redirects them to the login page.

The top of the page displays the available credit balance, which is updated after each operation.

## Running Locally

To run the application locally, execute the command `npm run dev` in the root folder. Please note that the backend site must also be running. Follow the instructions on this page to run the backend: [https://github.com/decooliveira/calculator-backend](https://github.com/decooliveira/calculator-backend)

**Note:** This documentation assumes familiarity with the development environment and necessary dependencies.
