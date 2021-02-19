/*****************************Form validate*****************************/
function validate(){

var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value; 
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
var city = document.getElementById("city").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Por favor, digite um nome válido";
    error_message.innerHTML = text;
    return false;
  }
  if(surname.length < 5){
    text = "Por favor, digite um sobrenome válido";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 11){
    text = "Por favor, digite um número válido";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor, digite um e-mail válido";
    error_message.innerHTML = text;
    return false;
  }
  if(address.length < 5){
    text = "Por favor, digite um endereço válido";
    error_message.innerHTML = text;
    return false;
  }
  if(city.length < 5){
    text = "Por favor, digite a cidade";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Por favor, digite o assunto";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 140){
    text = "Por favor, digite mais de 140 caracteres";
    error_message.innerHTML = text;
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true;
}
