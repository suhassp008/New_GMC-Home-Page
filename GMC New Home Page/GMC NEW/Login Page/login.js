const login = document.querySelector('.login-inputs');
const register = document.getElementById('register-section');

const loginBtn = document.querySelector('.loginBtn');
const registerBtn = document.querySelector('.registerBtn');

loginBtn.onclick = function(){
    login.style.display = "flex";
    register.style.display = "none";
}
registerBtn.onclick = function(){
    register.style.display = "flex";
    login.style.display = "none";
    console.log('hello there')
}

