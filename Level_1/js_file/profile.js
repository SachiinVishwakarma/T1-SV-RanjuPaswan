
   let user = JSON.parse(localStorage.getItem("currentUser"));
 
window.onload = function () {

    

    if (!user) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("sideName").innerText =user.firstName + " " + user.lastName;
    document.getElementById("sideEmail").innerText =user.email;
    document.getElementById("avatar").innerText =(user.firstName[0] + user.lastName[0]).toUpperCase();


    document.getElementById("fullname").value =user.firstName + " " + user.lastName;
    document.getElementById("email").value =user.email || "";
    document.getElementById("dob").value =user.dob || "";
    document.getElementById("number").value =user.number || "";
    document.getElementById("Address").value =user.Address || "";
    document.getElementById("pin").value =user.pin || "";
    document.getElementById("city").value =user.city || "";
    document.getElementById("country").value =user.country || "";
    document.getElementById("git").value =user.git || "";

}
    
    document.querySelector(".btn-save").addEventListener("click", function (e) {

        e.preventDefault();

        let fullname =document.getElementById("fullname").value.trim();
        let email =document.getElementById("email").value.trim();
        let dob =document.getElementById("dob").value;
        let number =document.getElementById("number").value.trim();
        let Address =document.getElementById("Address").value.trim();
        let pin =document.getElementById("pin").value.trim();
        let city =document.getElementById("city").value.trim();
        let country =document.getElementById("country").value.trim();
        let git =document.getElementById("git").value.trim();

 let namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
let phonePattern = /^[0-9]{10}$/;
let pincodePattern = /^[0-9]{6}$/;
let cityPattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
let countryPattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

if (
    fullname === "" ||
    email === "" ||
    dob === "" ||
    number === "" ||
    Address === "" ||
    pin === "" ||
    city === "" ||
    country === "" ||
    git === ""
) {
    alert("Please fill all fields");
    return;
}

if (!namePattern.test(fullname)) {
    alert("Name must contain only letters and spaces");
    return;
}

if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email");
    return;
}

if (!phonePattern.test(number)) {
    alert("Enter a valid 10 digit number");
    return;
}

if (!pincodePattern.test(pin)) {
    alert("Pin code must contain 6 digits");
    return;
}

if (!cityPattern.test(city)) {
    alert("City name must contain only letters and spaces");
    return;
}

if (!countryPattern.test(country)) {
    alert("Country name must contain only letters and spaces");
    return;
}


        let oldEmail = user.email;
        
        let names = fullname.split(" ");

        user.firstName = names[0];
        user.lastName = names.slice(1).join(" ");
    
        user.email = email;
        user.dob = dob;
        user.number = number;
        user.Address = Address;
        user.pin = pin;
        user.city = city;
        user.country = country;
        user.git = git;


        let users =JSON.parse(localStorage.getItem("users")) || [];

        let index = users.findIndex(function (u) {
            return u.email === oldEmail;
        });


        
        if (index !== -1) {
            users[index] = user;
        }


    
        localStorage.setItem("users",JSON.stringify(users) );
        localStorage.setItem("currentUser", JSON.stringify(user));

        document.getElementById("sideName").innerText = user.firstName + " " + user.lastName;
        document.getElementById("sideEmail").innerText = user.email;
        document.getElementById("avatar").innerText =(user.firstName[0] +user.lastName[0] ).toUpperCase();


        alert("Profile Updated Successfully!");

    });


  function logout(){
    localStorage.removeItem("currentUser");
    window.location.href="login.html";
  }  
   
  

