const form = document.querySelector('.container');

/* VALIDAÇÃO */

function cadastro() {
    window.location.href = "cadastro.html"
}

form.addEventListener('submit', (event) => {

    let email = document.querySelector('.input-cont').value;
    let senha = document.querySelector('.input-cont-senha').value;
    let mensagem = document.querySelector('.mensagem');

    if (email === "" || senha === "") {
        event.preventDefault()
        mensagem.textContent = "Preencha todos os campos"
        return
    }
    if (!email.includes("@")) {
        event.preventDefault()
        mensagem.textContent = "Email invalido"
        return
    }
    if (senha.length < 8) {
        event.preventDefault()
        mensagem.textContent = "A senha deve ter no minimo 8 caracteres"
        return
    }
    if (senha === senha.toLowerCase()) {
        event.preventDefault()
        mensagem.textContent = "Senha deve ter uma letra maiúscula"
        return
    }

    cadastro()
})