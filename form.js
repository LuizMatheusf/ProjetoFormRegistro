const form = document.querySelector("form"),
email = document.querySelector('#email'),
criePw = document.querySelector("#criePw"),
confirmPw = document.querySelector("#confirmPw"),
showHide = document.querySelector(".show-hide"),
showHide2 = document.querySelector(".show-hide2"),
exclamacao = document.querySelector(".exclamacao"),
exclamacao2 = document.querySelector(".exclamacao2"),
exclamacao3 = document.querySelector(".exclamacao3"),
alertEmail = document.querySelector(".alertEmail"),
indicadorPw = document.querySelector(".indicadorPw"),
alertPw = document.querySelector(".alertPw"),
emailValido = document.querySelector(".emailValido"),
senhaForte = document.querySelector(".senhaForte"),
senhaValida = document.querySelector(".senhaValida"),
submitBtn = document.querySelector("#botao");

// Código JS para validação de e-mail

form.addEventListener("submit", (input) => {
  input.preventDefault(); // Evitando o envio do formulário

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Regex pattern para validação de e-mail
  let valE = email.value; 
  
  alertEmail.classList.add("ativo");

  if (!valE.match(pattern) ) { 
    emailValido.innerText = "Por favor insira um email válido";
    exclamacao.style.color = "#D93025";
    emailValido.style.color = "#D93025";
    email.style.borderColor ="#D93025";

  }else {
    emailValido.innerText = "Este email é válido";
    exclamacao.style.color = "#22C32A";
    emailValido.style.color = "#22C32A";
    email.style.borderColor ="#22C32A";
  }

});

// Código JS para mostrar/ocultar senhas

showHide.addEventListener("click", ()=> {

  if(criePw.type === "password"){
    criePw.type = "text";
    showHide.classList.replace("fa-eye-slash","fa-eye");

  }else {
    criePw.type = "password";
    showHide.classList.replace("fa-eye","fa-eye-slash");
  }

});

showHide2.addEventListener("click", ()=> {
  
  if(confirmPw.type === "password"){
    confirmPw.type = "text";
    showHide2.classList.replace("fa-eye-slash","fa-eye");

  }else {
    confirmPw.type = "password";
    showHide2.classList.replace("fa-eye","fa-eye-slash");
  }

});

// Código JS para verificar a complecidade da senha

let alfabeto = /[a-zA-Z-]/,
    num = /[0-9]/,
    schar = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;

criePw.addEventListener("keyup", ()=>{

  indicadorPw.classList.add("ativo");
  alertPw.classList.add("ativo");

  let valPw = criePw.value;

  // Requisito 1 de validação de senha

  if(valPw.length >= 8){
    confirmPw.removeAttribute("disabled");

  if((valPw.match(alfabeto) || valPw.match(num) || valPw.match(schar)) && valPw.length >= 8) {  
    senhaForte.textContent = "Esta senha é fraca";
    showHide.style.color = "#ff6333";
    exclamacao2.style.color = "#ff6333";
    criePw.style.borderColor = "#ff6333";
  }

  if(valPw.match(alfabeto) && valPw.match(num) && valPw.length >= 8) {  
    senhaForte.textContent = "Esta senha é média";
    showHide.style.color = "#cc8500";
    exclamacao2.style.color = "#cc8500";
    criePw.style.borderColor = "#cc8500";
  }

  if(valPw.match(alfabeto) && valPw.match(num) && valPw.length >=8 && valPw.match(schar)) {  
    senhaForte.textContent = "Esta senha é forte";
    showHide.style.color = "#22C32A";
    exclamacao2.style.color = "#22C32A";
    criePw.style.borderColor = "#22C32A";
  }

  if(criePw.value == "") {
    indicadorPw.classList.remove("ativo");
    confirmPw.setAttribute("disabled", true);
    confirmPw.value = "";
  }

  if(criePw.value === confirmPw.value){
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
    senhaValida.innerText = "Confirmação de senha válida";
    exclamacao3.style.color = "#22C32A";
    senhaValida.style.color = "#22C32A";
    showHide2.style.color = "#22C32A";
    confirmPw.style.borderColor = "#22C32A";

  }else {
    submitBtn.setAttribute("disabled", true);
    senhaValida.innerText = "Cofirmação de senha não válida";
    exclamacao3.style.color = "#D93025";
    senhaValida.style.color = "#D93025";
    showHide2.style.color = "#D93025";
    confirmPw.style.borderColor ="#D93025";
  }
  
  }else {
    confirmPw.setAttribute("disabled", true);
    confirmPw.value = "";
    senhaForte.textContent = "A senha deve ter mais que 8 caracteres";
    showHide.style.color = "#D93025";
    exclamacao2.style.color = "#D93025";
    criePw.style.borderColor = "#D93025";
    
    // Atualização da confirmação pós modificação da senha

    senhaValida.innerText = "Cofirmação de senha não válida";
    exclamacao3.style.color = "#D93025";
    senhaValida.style.color = "#D93025";
    showHide2.style.color = "#D93025";
    confirmPw.style.borderColor ="#D93025";
  }

});

confirmPw.addEventListener("keyup", ()=> {

  // Requisito 2 de validação de senha

  if(criePw.value === confirmPw.value){
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
    senhaValida.innerText = "Confirmação de senha válida";
    exclamacao3.style.color = "#22C32A";
    senhaValida.style.color = "#22C32A";
    showHide2.style.color = "#22C32A";
    confirmPw.style.borderColor = "#22C32A";

  }else {
    submitBtn.setAttribute("disabled", true);
    senhaValida.innerText = "Cofirmação de senha não válida";
    exclamacao3.style.color = "#D93025";
    senhaValida.style.color = "#D93025";
    showHide2.style.color = "#D93025";
    confirmPw.style.borderColor ="#D93025";
  }

});

