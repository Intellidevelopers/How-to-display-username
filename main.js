function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    var userEmail = document.getElementById("email").value;
    localStorage.setItem("userEmail", userEmail);
    window.location.href = "comfirmation.html";
}
