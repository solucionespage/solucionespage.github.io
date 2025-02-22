// Cerrar Menu Desplegable MOVILE //
function boton_menu(){
    let header__desplegable = document.querySelector(".header__desplegable");
    
    if (header__desplegable.style.display === "none") {
        header__desplegable.style.display = 'flex'
    }

    else {
        header__desplegable.style.display = 'none'
    }
}

// Vueltas del Logo 

function rotar_header(){
    const logo_header = document.getElementById("logo_header");
    let vuelta = 0
    let rotacion = setInterval(()=>{
        vuelta += 5
        if (vuelta >= 360){
            vuelta = 0
            clearInterval(rotacion)
        }
        logo_header.style.rotate = `${vuelta}deg`
    }, 25)
}

function comenzar_rotacion(){
    setInterval(()=>{
        rotar_header()
    }, 10000)
}

comenzar_rotacion()
