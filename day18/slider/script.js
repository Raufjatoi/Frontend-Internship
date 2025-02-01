let images = ["images/img.JPG", "images/img2.JPG", "images/img3.png" ,"images/img4.png", "images/img5.png" ];
let v = 0; 

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('prv').onclick = preimg;
    document.getElementById('nxt').onclick = nxtimg;
});

function preimg() {
    if (v > 0) {
        v--;
    } else {
        v = images.length - 1;
    }
    const img = document.getElementById('img');
    img.src = images[v]; 
}

function nxtimg() {

    if (v < images.length - 1) {
        v++; 
    } else {
        v = 0;
    }
    const img = document.getElementById('img');
    img.src = images[v]; 
}