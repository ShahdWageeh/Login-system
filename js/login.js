var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var loginBtn = document.getElementById("logBtn")
var allUsers = []
allUsers = JSON.parse(localStorage.getItem('users')) || []

loginBtn.addEventListener('click', function(){
    var user = {
        userEmail: emailInput.value,
        userPass: passInput.value,
    }
    for(var i = 0; i<allUsers.length; i++){
        if(allUsers[i].userEmail.toLowerCase()==user.userEmail.toLowerCase() && allUsers[i].userPass==user.userPass){
            clearInputs()
            localStorage.setItem('username', JSON.stringify(allUsers[i].userName))
            window.location.href="home.html"
        }else{
            incorrect.innerHTML = "incorrect email or password"
            
        }
    }
})

function clearInputs(){
    emailInput.value = ''
    passInput.value = ''
}