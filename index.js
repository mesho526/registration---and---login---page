//AAU Registration-Page Validtion 
function showAlert() {
    confirm("Sure, Filled with correct information?");
    
}
function doValidation() {
let patt = /[0-9]+/;
let emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
if(document.register.firstName.value == "") {
    alert("Please provide your first name!");
    document.register.firstName.focus();
    return false;
}
if(document.register.firstName.value.match(patt)) {
    alert("First name can not contain number!");
    document.register.firstName.focus();
    return false;
}
if(document.register.lastName.value == "") {
    alert("Please provide your last name!");
    document.register.lastName.focus();
    return false;
}
if(document.register.lastName.value.match(patt)) {
    alert("Last name can not contain number!");
    document.register.lastName.focus();
    return false;
}
if(document.register.email.value == "") {
    alert("Please provide your email!");
    document.register.email.focus();
    return false;
}
if(!(document.register.email.value.match(emailPattern))) {
    alert("Please put correct email address!");
    document.register.email.focus();
    return false;
}
if(document.register.password.value == "") {
    alert("Please provide password!");
    document.register.password.focus();
    return false;
}
if(document.register.password.value.length < 8) {
    alert("Please provide at least 8 digit password");
    document.register.password.focus();
    return false;
}
if(!(document.register.password.value.match(passwordPattern))) {
    alert("Password should contain capital letter, small letter and number!");
    document.register.password.focus();
    return false;
}
if(document.register.sex.value == "") {
    alert("Please choose your sex");
    //document.register.sex.focus();
    return false;
}
let language = [register.english, register.amharic, register.others, register.none];
let ischecked = false;
for(let i = 0; i < language.length; i++) {
    if(language[i].checked) {
        ischecked =true;
        break;
    }
if(ischecked) {
    return true;
} else{
    alert("Please choose language");
    return false;
}}
if(document.register.file.value == "") {
    alert("Please upload profile!");
    document.register.file.focus();
    return false;
}
if(document.getElementById("program").value == document.getElementById("program")[0].value) {
    alert("Please choose program!")
    document.register.program.focus();
    return false;
}
return true;
} 
             //AAU Login page validation
var email = document.forms['login']['email'];
var password = document.forms['login']['password'];

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

function validated() 
{
    function email_Verify()
    {
        if (email.value.match(emailPattern)) 
        {
            email.style.border = "1px solid silver";
            return true;
        }else 
        {
                email.style.border = "1px solid red";
                email.focus();
                alert("Please include \"@gmail.com\"")
                return false;
        }
    }
    function pass_Verify()
    {
        if (password.value.match(passwordPattern)) 
        {
            password.style.border = "1px solid silver";
            return true;
        }else 
        {
                password.style.border = "1px solid red";
                password.focus();
                alert("put correct email and password(at least eight(8))");
                return false;
        }
    }
    
}


Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
