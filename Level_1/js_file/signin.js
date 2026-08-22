  

      
const signupForm = document.getElementById("signupForm");


signupForm.addEventListener("submit", function (e) {

    e.preventDefault();


    // Input Values User ka 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const confirmPassword = document.getElementById("confirmPass").value;



    let userData =JSON.parse(localStorage.getItem("userDetails")) || [];

     // Check Empty Fields
     if (
         firstName === "" ||
         lastName === "" ||
         email === "" ||
         password === "" ||
       confirmPassword === ""
     ) {
         alert("Please enter the all fields.")
      return;
    }
    const nameRegex = /^[A-Za-z]{2,15}$/;

    
    const emailRegex = /^[^\s@#]+@[^\s@#]+\.[^\s@#]+$/;

    //First Name check
    if (!nameRegex.test(firstName)) {
    alert("First Name must contain only letters.");
    return;
}

// Last Name Check
if (!nameRegex.test(lastName)) {
    alert("Last Name must contain only letters .");
    return;
}


    // Email Validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
         return;
     }

    // Password Length
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
       return;
     }

     // Password check
     if (password !== confirmPassword) {
         alert("Passwords do not match.");
         return;
     
     
    }
    const terms = document.getElementById("terms");

    if(!terms.checked){
      alert("Please accept the terms and conditions");
      return;
    }
         
 userData.push({
               firstName,
               lastName,
                 email,
               password

 })
     localStorage.setItem("userDetails",JSON.stringify(userData))
         
     alert(" Account Created Successfully! ")
  

    // Go to Login Page
    window.location.href = "login.html";

    
    });