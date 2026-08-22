window.onload = function() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  

  document.getElementById("sideName").innerText = user.firstName + " " + user.lastName;
  document.getElementById("sideEmail").innerText = user.email;
 
  let initials = user.firstName[0] + user.lastName[0];
  document.getElementById("avatar").innerText = initials.toUpperCase();
}




function logout(){
  localStorage.removeItem("currentUser");
  window.location.href="login.html";
}
