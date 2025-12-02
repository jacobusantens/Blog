document.addEventListener('DOMContentLoaded', () => {
    // Definimos las animaciones para los elementos del encabezado

    // Función para añadir la animación de aparición
    function applyPostAnimations() {
        const title = document.querySelector('.post-header h1');
        const meta = document.querySelector('.post-meta');
        const image = document.querySelector('.post-featured-image');

        // Clase CSS de animacion 'fade-in-up' (definida en el CSS principal)
        const animationClass = 'animated';

        // Aseguramos que los elementos empiecen ocultos (usando CSS)
        if (title) {
            title.style.opacity = 0;
            setTimeout(() => {
                title.style.opacity = 1;
                title.style.transform = 'translateY(0)';
                title.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            }, 100);
        }

        if (meta) {
            meta.style.opacity = 0;
            setTimeout(() => {
                meta.style.opacity = 1;
                meta.style.transform = 'translateY(0)';
                meta.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            }, 500); // Retraso de 0.4s
        }
        
        if (image) {
            image.style.opacity = 0;
            setTimeout(() => {
                image.style.opacity = 1;
                image.style.transform = 'translateY(0)';
                image.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            }, 900); // Retraso de 0.8s
        }
    }

    applyPostAnimations();
});