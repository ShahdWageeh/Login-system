var logoutBtn = document.getElementById('logout')
document.getElementById('welcome').innerHTML = `Welcome ${JSON.parse(localStorage.getItem('username'))}`
logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('username')
    location.href="index.html"
})