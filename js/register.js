var nameInput = document.getElementById("Uname");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var signUpInput = document.getElementById("btn");
var allInputs = document.querySelectorAll('input')
var allUsers = []
allUsers = JSON.parse(localStorage.getItem('users')) || []

signUpInput.addEventListener('click', function(){
    if(validateBtn()){
        var user = {
        userName: nameInput.value,
        userEmail: emailInput.value,
        userPass: passInput.value,
    }
    if(checkEmail(user.userEmail.toLowerCase()) == true){
        emailInvalid.innerHTML = "This Email already exist"
    }else{
        emailInvalid.innerHTML = ""
        nameInput.classList.remove("is-valid")
        emailInput.classList.remove("is-valid")
        passInput.classList.remove("is-valid")
        allUsers.push(user)
        localStorage.setItem('users', JSON.stringify(allUsers))
        clearInputs()
        Swal.fire({
            title: "Good job!",
            text: "Your email created successfully!",
            icon: "success"
          });
    }
    }else{
        Swal.fire({
            icon: "error",
            title: "Please fill inputs correctly",
            html: `<b>Name:</b> from 3 to 50 characters<br>
                   <b>Email:</b> example@domain.com<br>
                   <b>Paaword:</b> contain at least 8 characters, at least 1 uppercase,lowercase,number,special character`,
          });
        
    }
    
    
})

function clearInputs(){
    nameInput.value = ''
    emailInput.value = ''
    passInput.value = ''
}
function checkEmail(userMail){
    for(var i = 0; i<allUsers.length; i++){
        if(allUsers[i].userEmail.toLowerCase() == userMail){
            return true
        }
    }
    return false
}
function validateInputs(regex, inputValue, input){
    if(regex.test(inputValue) == true){
        input.classList.replace("is-invalid", "is-valid")
        return true;
        }else{
            input.classList.add("is-invalid")
            return false;
        }
}
for(var i = 0; i<allInputs.length; i++){
    allInputs[i].addEventListener('input', function(){
        validateInputs(/^[\w\s]{3,50}$/i, nameInput.value, nameInput)
        validateInputs(/^\w+@\w+\.com$/i, emailInput.value, emailInput)
        validateInputs(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_\+]).{8,}$/, passInput.value, passInput)
    })
}
function validateBtn(){
    if (
        validateInputs(/^[\w\s]{3,50}$/i, nameInput.value, nameInput) &&
        validateInputs(/^\w{5,20}@(gmail|yahoo)\.com$/, emailInput.value, emailInput) &&
        validateInputs(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_\+]).{8,}$/, passInput.value, passInput)
    ) {
        return true
    }else{
        return false
    }
}