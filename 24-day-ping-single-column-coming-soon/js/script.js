inputEmail = Document.getelemen
function sendEmail(event) {
    event.preventDefault();

    const email = document.getElementById("email-input");
    const errorMessage = document.getElementById("error-message");
    const errorIcon = document.getElementById("error-icon");

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email?.value == "" || !emailPattern.test(email.value)) {
        errorMessage.classList.remove("hidden");
        errorIcon.classList.remove("hidden");
        email.classList.remove("red-border ");
    } else {
        errorMessage.classList.add("hidden")
        errorIcon.classList.add("hidden")
        email.classList.remove("red-border ");
    }

}