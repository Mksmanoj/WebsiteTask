var attempt = 6; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Yusata" && password == "Yusata123") {
    alert("Login successfully");
    window.location = "default.html"; // Redirecting to other page.
    return false;
  }
  if (username == "Manoj" && password == "Manoj123") {
    alert("Login successfully");
    window.location = "default.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after NUMBER OF ATTEMPTS attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
