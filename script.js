function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    console.log(password,confirmPassword);
    let message = document.getElementById("message")

    if(password.length != 0)

    if (password == confirmPassword) {
       message.textContent = "passwords match";
       message.style.backgroundColor = "#3ae374";
    }
    else{
       message.textContent = "These passwords do not match";
       message.style.backgroundColor = "#ff4d4d";
    }
  }  


 