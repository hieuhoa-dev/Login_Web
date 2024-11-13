const Login = document.querySelector('.Login');
const LoginLink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

Registerlink.addEventListener('click', ()=> { 
    Login.classList.add('active');
});

LoginLink.addEventListener('click', ()=> { 
    Login.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> { 
    Login.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> { 
    Login.classList.remove('active-popup');
});