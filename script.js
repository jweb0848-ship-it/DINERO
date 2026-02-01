const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const content = document.getElementById('content');
const successMessage = document.getElementById('success-message');

// Función para mover el botón
const moverBoton = () => {
    // Calculamos límites para que no se salga de la pantalla visible
    const padding = 20;
    const maxX = window.innerWidth - btnNo.offsetWidth - padding;
    const maxY = window.innerHeight - btnNo.offsetHeight - padding;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
    btnNo.style.zIndex = '1000';
};

// Se activa al pasar el mouse (PC) o al intentar tocarlo (Móvil)
btnNo.addEventListener('mouseenter', moverBoton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita que el teléfono haga el "clic" accidental
    moverBoton();
});

// Lógica al aceptar (por si se rinde y le pica al Sí)
btnYes.addEventListener('click', () => {
    content.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Confeti de billetes (verde y dorado)
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#28a745', '#ffd700']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#28a745', '#ffd700']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});