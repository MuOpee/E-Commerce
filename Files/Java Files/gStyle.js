document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 10px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00';
    });
    button.addEventListener('mouseout', function() {
        this.style.boxShadow = '';
    });
});
