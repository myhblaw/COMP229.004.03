/*
    assignment4.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 4, 2022
*/

function createEventListner() {
    var button1 = document.getElementById('register');
    var button2 = document.getElementById('reset');
    button1.addEventListener("click", formValidation, false);
    button2.addEventListener("click", clearForm, false);
    }

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('mail').value = '';
    }

function formValidation() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('phone').value;
    var email = document.getElementById('mail').value;
    var testResult = true;
    var emailExpression = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/; // regular expression for validating email


    if (firstName == "") {
    document.getElementById('fnameError').innerHTML = "Please enter the First Name";
    testResult = false;
    } 
    
    else {
    document.getElementById('fnameError').innerHTML = "";
    }

    if (lastName == "") {
    document.getElementById('lnameError').innerHTML = "Please enter the Last Name";
    testResult = false;
    }
    
    else {
    document.getElementById('lnameError').innerHTML = "";
    }

    if (phone == "") {
    document.getElementById('phoneError').innerHTML = "Please enter a valid phone number.";
    testResult = false;
    }
    
    else {
    document.getElementById('phoneError').innerHTML = "";
    }

    if (email == "") {
    document.getElementById('mailError').innerHTML = "Please enter a valid Email.";
    testResult = false;
    }
   
    else if (!emailExpression.test(email)) {
    document.getElementById('mailError').innerHTML = "Email must contain @ and .";
    testResult = false;
    } 
    
    else {
    document.getElementById('mailError').innerHTML = "";
    }

    if (testResult) {
    alert("Thanks for registering with our website, your customer record was created successfully.");
    window.open('/', '_blank');
    }

}
window.addEventListener("load", createEventListner, false);