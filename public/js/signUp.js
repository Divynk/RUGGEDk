
const form = document.querySelector("#regForm");
const submit = document.querySelector("#btn-submit");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const cnfpass = document.querySelector("#cnf-pass");
const error = document.querySelectorAll(".error");
const eyeIcon = document.querySelectorAll(".fa-regular");
const mobileno = document.querySelector("#mobileno");

//pattens
let userregx = /^[a-z]/i;
let emailregx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
let passregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/

function startWithalphabet(Name) {
    if (!(userregx.test(Name.value))) {
        return false;
    }
    else {
        return true
    }
}

function userLength(Name) {
    if (!(Name.value.length >= 3 && Name.value.length <= 20)) {
        return false;
    }
    else {
        return true;
    }
}

function validatefirstname() {

    if (!startWithalphabet(firstname)) {
        firstname.style.outlineColor = "red";
        error[0].innerHTML = "Name should start with alphabet";
    }
    else if (!userLength(firstname)) {
        error[0].innerHTML = "";
        firstname.style.outlineColor = "red";
        error[0].innerHTML = "Name should contain atleast 3 characters atmost 20";
    }
    else {
        error[0].innerHTML = "";
        firstname.style.outlineColor = "green";
        return true;
    }
}

function validatelastname() {

    if (!startWithalphabet(lastname)) {
        lastname.style.outlineColor = "red";
        error[1].innerHTML = "Name should start with alphabet";
    }
    else if (!userLength(lastname)) {
        error[1].innerHTML = "";
        lastname.style.outlineColor = "red";
        error[1].innerHTML = "Name should contain atleast 3 characters atmost 20";
    }
    else {
        error[1].innerHTML = "";
        lastname.style.outlineColor = "green";
        return true;
    }
}

function validateMobileNumber() {
    if (mobileno.value.length != 10) {
        mobileno.style.outlineColor = "red";
        error[2].innerHTML = "invalid Number";
    }
    else {
        mobileno.style.outlineColor = "green";
        error[2].innerHTML = "";
        return true;
    }
}



function validateEmail() {
    if (!emailregx.test(email.value)) {
        email.style.outlineColor = "red";
        email.style.position.top = "10px";
        error[3].innerHTML = "Invalid Email";
        return false;
    }
    else {
        email.style.outlineColor = "green";
        error[3].innerHTML = "";
        return true;
    }
}


function checkLowerCase() {
    var lowerCaseLetters = /[a-z]/g;
    if (pass.value.match(lowerCaseLetters)) {
        return true;
    }
    else {
        return false;
    }
}


function passwordStrength() {
    if (pass.value.length >= 8) {
        return true;
    }
    else {
        return false;
    }
}



function checkUpperCase() {
    var upperCaseLetters = /[A-Z]/g;
    if (pass.value.match(upperCaseLetters)) {
        return true;
    }
    else {
        return false;
    }
}



function checkNumber() {
    var numbers = /[0-9]/g;
    if (pass.value.match(numbers)) {
        return true;
    } else {
        return false;
    }
}



function validatePassword() {

    if (!checkLowerCase()) {
        error[4].innerHTML = "password should contain atleast one Lowercase letter";
        pass.style.outlineColor = "red";
    }

    else if (!checkUpperCase()) {
        error[4].innerHTML = "password should contain atleast one Uppercase letter";
        pass.style.outlineColor = "red";
    }
    else if (!checkNumber()) {
        error[4].innerHTML = "password should contain atleast one number";
        pass.style.outlineColor = "red";
    }

    else if (!passwordStrength()) {
        error[4].innerHTML = "password should contain atleast 8 characters";
        pass.style.outlineColor = "red";
    }

    else {
        error[4].innerHTML = "";
        pass.style.outlineColor = "green";
    }


    if (passwordStrength() && checkLowerCase() && checkUpperCase() && checkNumber()) {
        return true;
    }
    else {
        return false;
    }
}

function checkPass() {
    if (pass.value !== cnfpass.value) {
        error[5].innerHTML = "check your password again";
        cnfpass.style.outlineColor = "red";
    }
    else {
        error[5].innerHTML = "";
        cnfpass.style.outlineColor = "green";
        return true;
    }
}


eyeIcon[4].addEventListener('click', function () {
    if (eyeIcon[4].classList.contains('fa-eye')) {
        eyeIcon[4].classList.remove("fa-eye");
        eyeIcon[4].classList.add("fa-eye-slash");
        pass.setAttribute('type', 'text');
    }
    else {
        eyeIcon[4].classList.remove('fa-eye-slash');
        eyeIcon[4].classList.add("fa-eye");
        pass.setAttribute('type', 'password');
    }
})

eyeIcon[5].addEventListener('click', function () {
    if (eyeIcon[5].classList.contains('fa-eye')) {
        eyeIcon[5].classList.remove("fa-eye");
        eyeIcon[5].classList.add("fa-eye-slash");
        cnfpass.setAttribute('type', 'text');
    }
    else {
        eyeIcon[5].classList.remove('fa-eye-slash');
        eyeIcon[5].classList.add("fa-eye");
        cnfpass.setAttribute('type', 'password');
    }
})




form.addEventListener('submit', function (e) {
    if (validatefirstname() && validatelastname() && validateMobileNumber() && validateEmail() && validatePassword() && checkPass()) {
        return true;
    }
    else {
        e.preventDefault();
        return false;
    }

})
