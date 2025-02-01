let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Dec').onclick = dec;
    document.getElementById('Inc').onclick = inc;
    document.getElementById('res').onclick = re;
});

function inc() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

function dec() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

function re(){
    counter = 0;
    document.querySelector('h1').innerHTML = counter;
    
}
