let titulo_paguina = document.title;
const ir_a_whatsapp = document.getElementById("boton__whatsapp");
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const heroHeight = document.querySelector('.section__hero').offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
        ir_a_whatsapp.style.display = "flex"
    } else {
        header.classList.remove('sticky');
    }
});