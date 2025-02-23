function abrir_menu(){
    document.querySelector(".header__desplegable").style.display = "flex";
}

// Cerrar Menu Desplegable MOVILE //
function boton_menu(){
    let header__desplegable = document.querySelector(".header__desplegable");
    
    if (header__desplegable.style.display == "none") {
        header__desplegable.style.display = 'flex'
    }

    else {
        header__desplegable.style.display = 'none'
    }
}

