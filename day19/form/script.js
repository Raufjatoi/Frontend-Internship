const form1 = document.getElementById('form');
const form = document.createElement('form');

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'Your Name';

const inputAge = document.createElement('input');
inputAge.type = 'number';
inputAge.placeholder = 'Your Age';

const inputMail = document.createElement('input');
inputMail.type = 'text';
inputMail.placeholder = 'Your Email';  

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.placeholder = 'Your Password';

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

document.addEventListener('DOMContentLoaded', function (){
form.appendChild(inputName);
form.appendChild(inputAge);
form.appendChild(inputMail);
form.appendChild(inputPassword);
form.appendChild(submitButton); 
form1.appendChild(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('form submitted Name: ' + inputName.value 
    + ' Age: ' + inputAge.value + 'Mail: ' + inputMail.value + 'password: ' + inputPassword.value);
} );

});