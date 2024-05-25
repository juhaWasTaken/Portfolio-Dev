document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("toggle");
    });
});

const mailInput = document.getElementById('mailTxt');
const mailText = mailInput.querySelector('.mail-txt');

const copyText = async () => {
    try {
        await navigator.clipboard.writeText(mailText.textContent);
        mailText.textContent = 'Copiado';

        setTimeout(() => {
            mailText.textContent = 'carlos.gallagav@gmail.com';
        }, 2000); // Cambia el texto de vuelta después de 2 segundos
    } catch (err) {
        // console.error('Failed to copy: ', err);
        alert('Failed to copy');
    }
}

mailInput.addEventListener('click', copyText);