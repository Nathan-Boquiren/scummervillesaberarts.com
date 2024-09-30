function nextStep() {
    const currentSection = document.querySelector('.form-section:not([style*="display: none"])');
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        currentSection.style.display = 'none';
        nextSection.style.display = 'block';
    }
}