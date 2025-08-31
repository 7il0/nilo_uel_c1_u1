function isValidUrl(url) {
    try { new URL(url); return true; } catch { return false; }
}


function attachBasicValidation(form) {
    if (!form) return;
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        const imgInput = form.querySelector('#imagen');
        if (imgInput && imgInput.value && !isValidUrl(imgInput.value)) {
            e.preventDefault();
            e.stopPropagation();
            imgInput.classList.add('is-invalid');
            const fb = imgInput.nextElementSibling;
            if (fb && fb.classList.contains('invalid-feedback')) {
                fb.textContent = 'La URL de imagen no es válida.';
            }
        }
        form.classList.add('was-validated');
    });
}


(function () {
    document.querySelectorAll('form.needs-validation').forEach(attachBasicValidation);
})();


window.isValidUrl = isValidUrl;
window.attachBasicValidation = attachBasicValidation;