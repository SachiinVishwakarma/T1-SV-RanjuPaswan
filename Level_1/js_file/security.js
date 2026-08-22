

window.onload = function() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  

  document.getElementById("sideName").innerText = user.firstName + " " + user.lastName;
  document.getElementById("sideEmail").innerText = user.email;

  let initials = user.firstName[0] + user.lastName[0];
  document.getElementById("avatar").innerText = initials.toUpperCase();
}
let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
}



// Account Information ke liye


if (document.getElementById("accountcreated")) {
    document.getElementById("accountcreated").textContent =
        user.createdDate || "Not Available";
}

if (document.getElementById("lastupdate")) {
    document.getElementById("lastupdate").textContent =
        user.lastUpdate || "Never Updated";
}

// Clear Password Fields ke liye

function clearFields() {
    document.getElementById("pass").value = "";
    document.getElementById("new").value = "";
    document.getElementById("con").value = "";
}


// Update Password

function updatepassword() {

    let currentPassword = document.getElementById("pass").value.trim();
    let newPassword = document.getElementById("new").value.trim();
    let confirmPassword = document.getElementById("con").value.trim();

    if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Current Password Check
    if (currentPassword !== user.password) {
        alert("Current password is not valid.");
        return;
    }

    // Password Length
    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    

    // Match Password
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    

    // Same Password Check
    if (newPassword === currentPassword) {
        alert("New password cannot be the same as the current password.");
        return;
    }
        


    // Update Password
    user.password = newPassword;
    user.lastUpdate = new Date().toLocaleString();

    // Update Current User
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Update User List
    let users = JSON.parse(localStorage.getItem("userDetails")) || [];

    for (let i = 0; i < users.length; i++) {

        if (users[i].email === user.email) {

            users[i].password = newPassword;
            users[i].lastUpdate = user.lastUpdate;
            break;
        }
    }

    localStorage.setItem("userDetails", JSON.stringify(users));

    // Update UI
    if (document.getElementById("lastupdate")) {
        document.getElementById("lastupdate").textContent =
            user.lastUpdate;
    }

    alert("Password Updated Successfully!");

    clearFields();
}


// Logout


function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}