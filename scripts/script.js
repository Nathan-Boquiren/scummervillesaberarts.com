function nextStep() {
    const currentSection = document.querySelector('.form-section:not([style*="display: none"])');
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        currentSection.style.display = 'none';
        nextSection.style.display = 'block';
    }
}

document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 6) {
        value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3');
    }
    e.target.value = value.slice(0, 12); // Ensure the formatted value does not exceed 12 characters (including dashes)
});