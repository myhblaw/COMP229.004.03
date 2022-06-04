/*
   Author name: Yuk Hong Ma
   Student ID: 301210312
   Date: March 19, 2022
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
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('postalCode').value = '';
    document.getElementById('province').value = '';
    document.getElementById('age').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm').value = '';
    document.getElementById('mail').value = '';
    }

function formValidation() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postalCode = document.getElementById('postalCode').value;
    var province = document.getElementById('province').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var email = document.getElementById('mail').value;
    var testResult = true;
    var emailExpression = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/; // regular expression for validating email
    var passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; //regular expression for validating password
    var postalExpression = /^[A-Za-z]\d[A-Za-z][-]?\d[A-Zaz]\d/; // regular expression for a0a0a0 format

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

    if (address == "") {
    document.getElementById('addressError').innerHTML = "Please enter a valid Address.";
    testResult = false;
    }
    
    else {
    document.getElementById('addressError').innerHTML = "";
    }

    if (city == "") {
    document.getElementById('cityError').innerHTML = "Please enter a valid City.";
    testResult = false;
    } 
    
    else {
    document.getElementById('cityError').innerHTML = "";
    }

    if (postalCode == "") {
    document.getElementById('postalCodeError').innerHTML = "Please enter a valid Postal Code.";
    testResult = false;
    }
    
    else if (!postalExpression.test(postalCode)) {
    alert("Postal Code should be in a0a0a0 format.");
    testResult = false;
    } 
    
    else {
    document.getElementById('postalCodeError').innerHTML =
    "";
    }

    if (province == "") {
    document.getElementById('provinceError').innerHTML = "Please choose a valid Province.";
    testResult = false;
    }
    
    else {
    document.getElementById('provinceError').innerHTML = "";
    }

    if (age == "") {
    document.getElementById('ageError').innerHTML = "Please enter a valid Age.";
    testResult = false;
    }

    else if (age < 18) {
    document.getElementById('ageError').innerHTML = "Age should be atleast 18 years.";
    testResult = false;
    }
    
    else {
    document.getElementById('ageError').innerHTML = "";
    }

    if (password == "") {
    document.getElementById('passwordError').innerHTML = "Please enter a valid Password.";
    testResult = false;
    } 

    else if (!passwordExpression.test(password)) {
    alert("Passwords must have at least 6 characters and must contain at least one digit and one upper-case character.");
    testResult = false;
    }
    
    else {
    document.getElementById('passwordError').innerHTML = "";
    }

    if (confirm == "") {
    document.getElementById('confirmError').innerHTML = "Please enter the same Password";
    testResult = false;
    } 

    else if (confirm != password) {
    document.getElementById('confirmError').innerHTML = "Passwords must be identical.";
    testResult = false;
    }
    
    else {
    document.getElementById('confirmError').innerHTML = "";
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