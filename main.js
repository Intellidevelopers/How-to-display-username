function submitForm() {
    var userEmail = document.getElementById("email").value;
    localStorage.setItem("userEmail", userEmail);
    window.location.href = '/pass.html';
}
