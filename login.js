 function showRegisterForm() {
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('registerForm').classList.remove('d-none');
}

function showLoginForm() {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.remove('d-none');
}

function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Cadastro realizado com sucesso!');
        showLoginForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username) === password) {
        alert('Login realizado com sucesso!');
        window.location.href = 'buscar.html'; 
        alert('Usuário ou senha incorretos.');
    }
}