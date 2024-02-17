
function submitForm(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var emailAddress = document.getElementById("email-address").value;
    var password = document.getElementById("password-input").value;

    // Check first-name
    if (firstName === "") {
        document.getElementById("first-name-error").classList.remove("hidden")
        document.getElementById("first-name-error-icon").classList.remove("hidden")
    } else {
        document.getElementById("first-name-error").classList.add("hidden")
        document.getElementById("first-name-error-icon").classList.add("hidden")
    }

    // Check last-name
    if (lastName === "") {
        document.getElementById("last-name-error").classList.remove("hidden")
        document.getElementById("last-name-error-icon").classList.remove("hidden")
    } else {
        document.getElementById("last-name-error").classList.add("hidden")
        document.getElementById("last-name-error-icon").classList.add("hidden")
    }

    // Check email-address
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(emailAddress)) {
        document.getElementById("email-address-error").classList.remove("hidden")
        document.getElementById("email-address-error-icon").classList.remove("hidden")
    } else {
        document.getElementById("email-address-error").classList.add("hidden")
        document.getElementById("email-address-error-icon").classList.add("hidden")
    }

    // Check password
    if (password === "") {
        document.getElementById("password-error").classList.remove("hidden")
        document.getElementById("password-error-icon").classList.remove("hidden")
    } else {
        document.getElementById("password-error").classList.add("hidden")
        document.getElementById("password-error-icon").classList.add("hidden")
    }

}