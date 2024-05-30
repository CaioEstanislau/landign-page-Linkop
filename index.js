document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.change-pic');
    const profilePic = document.getElementById('imageprofile');
    let activeButton = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const newSrc = button.getAttribute('data-img');
            profilePic.src = newSrc;

            if (activeButton && activeButton !== button) {
                const originalImgSrc = activeButton.getAttribute('data-original-img');
                activeButton.querySelector('img').src = originalImgSrc;
            }

            const selectedImgSrc = button.getAttribute('data-selected-img');
            button.querySelector('img').src = selectedImgSrc;

            if (activeButton) {
                activeButton.classList.remove('active');
            }

            button.classList.add('active');
            activeButton = button;
        });
    });
});
