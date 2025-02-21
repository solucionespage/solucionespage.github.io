let texto_slogan = ["A", "Al", "Al ", "Al A", "Al Al", "Al Alc", "Al Alca", "Al Alcan", "Al Alcanc", "Al Alcance", "Al Alcance ", "Al Alcance d", "Al Alcance de" , "Al Alcance de ", "Al Alcance de s", "Al Alcance de su", "Al Alcance de sus", "Al Alcance de sus ", "Al Alcance de sus m", "Al Alcance de sus ma", "Al Alcance de sus man", "Al Alcance de sus mano", "Al Alcance de sus manos", "Al Alcance de sus manos."]
let texto_slogan_reverse = ['Al Alcance de sus manos.', 'Al Alcance de sus manos', 'Al Alcance de sus mano', 'Al Alcance de sus man', 'Al Alcance de sus ma', 'Al Alcance de sus m', 'Al Alcance de sus ', 'Al Alcance de sus', 'Al Alcance de su', 'Al Alcance de s', 'Al Alcance de ', 'Al Alcance de', 'Al Alcance d', 'Al Alcance ', 'Al Alcance', 'Al Alcanc', 'Al Alcan', 'Al Alca', 'Al Alc', 'Al Al', 'Al A', 'Al ', 'Al', 'A']
let vuelta = 0
let caracter = 0

setInterval(()=>{
    let hero_slogan = document.querySelector('.hero__slogan');
    let crear_h2 = document.createElement('h2')


    if (vuelta < 24){
        let crear_texto = document.createTextNode(texto_slogan[caracter])
        crear_h2.appendChild(crear_texto)
        hero_slogan.innerHTML = ""
        hero_slogan.appendChild(crear_h2)
        vuelta++
        caracter++
    }

    else if (vuelta < 32) {
        vuelta++
        caracter = 0
    }

    else if (vuelta < 56) {
        let crear_texto = document.createTextNode(texto_slogan_reverse[caracter])
        crear_h2.appendChild(crear_texto)
        hero_slogan.innerHTML = ""
        hero_slogan.appendChild(crear_h2)
        caracter++
        vuelta++

    }
    
    else {
        vuelta = 0
        caracter = 0
    }
}, 150)