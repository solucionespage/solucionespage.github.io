window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const heroHeight = document.querySelector('.section__hero').offsetHeight;
    const ir_a_whatsapp = document.getElementById("boton__whatsapp");

    if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
        ir_a_whatsapp.style.display = "flex"
    } else {
        header.classList.remove('sticky');
    }
});

// Cerrar Menu Desplegable MOVILE //

function cerrar_menu(){
    let menu_desplegable = document.getElementById("boton_menu");
    menu_desplegable.checked = false;
}