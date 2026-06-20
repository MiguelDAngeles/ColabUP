document.addEventListener('DOMContentLoaded', () => {
    // Intercepción del formulario de contacto
    const contactForm = document.getElementById('colabup-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Obtener los valores (opcional, para uso futuro)
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;

            // Simulación de envío
            alert(`¡Gracias por contactar a ColabUp, ${nombre}! Hemos recibido tu mensaje y te responderemos pronto a ${correo}.`);

            // Limpiar el formulario
            contactForm.reset();
        });
    }

    // Efecto suave para el scroll del menú (Smooth Scrolling)
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Ajuste por la altura del navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});