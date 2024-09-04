const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampBroken(){        // funçao para verificar se a lampada está quebrada ou nao
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){  
    if (!islampBroken()) {     // funçao para verificar se a lampada está quebrada 
    lamp.src = './img/ligada.jpg';
    }
}
function lampOff (){
    if (!islampBroken()) {    // funçao para verificar se a lampada está quebrada 
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = '.img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);