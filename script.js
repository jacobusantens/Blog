document.addEventListener('DOMContentLoaded', () => {
    // 1. Transición de la Barra de Navegación al Scroll (se encoge y gana sombra)
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50; // Pixeles a hacer scroll para activar el cambio

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.style.padding = '0.5rem 2rem';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'; // Fondo casi opaco
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.padding = '1.2rem 2rem';
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
        }
    });

    // 2. Transición de Aparición Suave (Intersection Observer)
    // Hace que los artículos aparezcan con un efecto 'fade-in' y 'slide-up' al entrar en el viewport.
    const blogPosts = document.querySelectorAll('.blog-post');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Usa la misma curva de transición que el CSS para el hover
                entry.target.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
                observer.unobserve(entry.target); // Deja de observar una vez que se muestra
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15 // Se dispara cuando el 15% del elemento es visible
    });

    blogPosts.forEach(post => {
        post.style.opacity = 0; // Inicialmente oculto
        post.style.transform = 'translateY(60px)'; // Aparecerá desde abajo
        observer.observe(post);
    });

    // 3. Smooth Scroll para enlaces internos 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});