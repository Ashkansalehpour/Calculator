// Selectors
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


// Getting the value of buttons(Using loop)

for (item of btn) {
    item.addEventListener('click', (e) => {
        BtnVal = e.target.innerText;

        if (BtnVal == '×') {
            BtnVal = '*';
        }

        if (BtnVal == '÷') {
            BtnVal = '/';
        }
        screen.value += BtnVal;
    })
}

// Math calculation 

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function pow3() {
    screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() { 
    screen.value = 3.14159265359;
}

function sqrt3() {
    screen.value = Math.pow(screen.value, 1/3);
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}