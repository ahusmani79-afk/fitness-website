function showMessage() {
    alert("Welcome to Fitness Pro! Start your fitness journey today 💪");
}

function submitEmail() {
    let email = document.getElementById("email").value;
    document.getElementById("response").innerHTML = email ? "Thank you! We will contact you soon." : "Please enter an email!";
    document.getElementById("response").style.color = email ? "green" : "red";
}