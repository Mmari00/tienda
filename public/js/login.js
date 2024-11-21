const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const register = document.getElementById('uno');
const login = document.getElementById('dos');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    
});

register.addEventListener('click', () => {
    alert('¡Registro exitoso! Bienvenid@ a nuestra plataforma.');
    
});

login.addEventListener('click', () => {
    alert('¡Ingreso exitoso! Bienvenid@ otra vez.');
    
});


