// JS para mostrar feedback de envío
const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            feedback.textContent = "Missatge enviat correctament! Gràcies.";
            feedback.className = "contact-feedback success";
            feedback.style.display = "block";
            form.reset();
        } else {
            return response.json().then(data => {
                throw new Error(data.error || "Hi ha hagut un error enviant el missatge.");
            });
        }
    })
    .catch(error => {
        feedback.textContent = error.message;
        feedback.className = "contact-feedback error";
        feedback.style.display = "block";
    });
});
