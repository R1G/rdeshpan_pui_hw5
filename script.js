
(function() {
    const boxesContainer = document.querySelector('.size-boxes');
    let selectedSizeBox;

    boxesContainer.addEventListener('click', function (event) {
        if (selectedSizeBox) {
            selectedSizeBox.classList.remove('selected-size');
        }
        selectedSizeBox = event.target;
        selectedSizeBox.classList.add('selected-size');
        localStorage.setItem('selectedSize', event.target.getAttribute('data-size'));
    });
}());
