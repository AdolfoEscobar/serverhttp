let button = document.getElementById('boton-ocultar');
let imageLogo = null;

button.onclick = () => {
    imageLogo = document.getElementById('logo-fing');
    imageLogo.style = 'display:none';
};

