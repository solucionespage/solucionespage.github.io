
function abrir_data(valor){
    let info = document.querySelector(`.${valor}`)
    info.style.display = "flex"
    
}

function cerrar_data(event, valor){
    let info = document.querySelector(`.${valor}`)

    event.stopPropagation();
    info.style.display = "none"
}