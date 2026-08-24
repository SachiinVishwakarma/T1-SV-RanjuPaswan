


const form = document.getElementById("login");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();

    const users = JSON.parse(localStorage.getItem("userDetails")) || [];

    

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login Successfully!");

    window.location.href = "overview.html";
});


