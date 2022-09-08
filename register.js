function check(){
var Fname = document.getElementById("Fname").value;
var Lname = document.getElementById("Lname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var password = document.getElementById("password").value;
//first name can not be empty
if (Fname.length==""){
    alert("First name can not be empty")
}
//last name can not have less than 2 letters
if (Lname.length<2){
    alert("Last name can not be less than two letter")
}

if (email.length==""){
    alert("Email can not be empty")
}
//phone number have to have 10 number only
if (phone.length<10){
    alert("Phone number should be 10 digits")
}
// ! means not / not match with capital A to Z give alert
if (!password.match(/[A-Z]/)){ 
    alert("At least one capital letter")
}

//password  have to have 8 or more only--if less give me error
if (password.length<8){
    alert("Password can not be less than 8 letters or numbers")
}

//password have to have at least one number
if (!password.match(/[0-9]/)){ 
    alert("Password have to have at least one number")
}


}

