// conectando os id
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// validar formulario com o botão
form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

// validar input assim que for digitado
username.addEventListener("blur", () => {
    checkInputUserName();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

password.addEventListener("blur", () => {
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
});;


// validar nome do usuário
function checkInputUserName(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha o nome do usuário!");
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

// validar o email
function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório");
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

// validar a senha
function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória!");
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no minímo 8 caracteres.");
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

// validar confirmação de senha
function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória!");
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "A senhas não são iguais.");
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}

// função para verificar os input sem erro
function checkForm(){
    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";
    });

    if(isValid){
        alert("Cadastrado com sucesso!");
    }
}

// função de erro
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "form-content error";
}