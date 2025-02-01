document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    };
});

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('select').onchange = function() {
        document.querySelector('#color').style.color = this.value;
    }

    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            document.querySelector('#colors').style.color = button.dataset.color;   
        }
    });

});

document.addEventListener('DomContentLoaded', () => {

    document.querySelector('select').onchange = function() {
        document.querySelector('#color').style.color = this.value;
    }
    
    });