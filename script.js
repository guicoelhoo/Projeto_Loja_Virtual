function dados() {
    return [
        { id: 1, login: "eduardo", password: "1234@", email: "eduardo@gmail.com" },
        { id: 2, login: "bobby", password: "1234@", email: "bobby@gmail.com" },
        { id: 3, login: "endrick", password: "1234@", email: "endrick@gmail.com" },
        { id: 4, login: "plinio", password: "1234@", email: "plinio@gmail.com" }
    ];
}

const usuarios = dados();

function login() {
    const log = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const errorMessage = document.querySelector('#error-message');
    
    for (let i = 0; i < usuarios.length; i++) {
        if (log === usuarios[i].email && senha === usuarios[i].password) {
            alert(`Bem-vindo, ${usuarios[i].login}!`);
            errorMessage.textContent = ''; // Limpa a mensagem de erro
            return;
        }
    }
    errorMessage.textContent = 'Login ou senha incorretos!';
}