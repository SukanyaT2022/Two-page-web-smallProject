function check(){
var Fname = document.getElementById("Fname").value;
var Lname = document.getElementById("Lname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var password = document.getElementById("password").value;
if (Fname.length==""){
    alert("First name can not be empty")
}
if (Lname.length<2){
    alert("Last name can not be less than two letter")
}

if (Lname.length<2){
    alert("Last name can not be less than two letter")
}



}