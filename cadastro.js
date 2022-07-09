let titulo = "Tela de Cadastro";
let inputs = {
    "nome" : "Nome",
    "email":"Email",
    "login" : "Login",
    "senha":"Senha",
    "cidade":"Cidade",
    "date": "Data de Nascimento"
}
let buttonDescription = {
    name:"Cadastrar"
}
let htmlButton = `<button onclick="criaUsuario()" class="btn btn-primary" id="buttonCadastrar"
style="width: 25%;">${buttonDescription.name}</button>`

document.getElementById('tituloCadastro').innerText = titulo;


document.getElementById('inputNome').innerText = inputs.nome;
document.getElementById('inputEmail').innerText = inputs.email;
document.getElementById('loginInputt').innerText = inputs.login;
document.getElementById('inputCidade').innerText = inputs.cidade;
document.getElementById('inputSenha').innerText = inputs.senha;
document.getElementById('inputDate').innerText = inputs.date;


document.getElementById('buttonCadastra').innerHTML = htmlButton;