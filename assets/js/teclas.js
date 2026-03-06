
document.addEventListener('keydown', (event) => {

    const color = document.getElementById('blanco')
    if (event.key == 'a') {
        color.style.backgroundColor = 'pink'
    }
    if (event.key == 's') {
        color.style.backgroundColor = 'orange'
    }
    if (event.key == 'd') {
        color.style.backgroundColor = 'skyblue'
    }

})


document.addEventListener('keydown', (event) => {
    
    if (event.key == 'q') {
        agregarElemento('purple')
    }
    if (event.key == 'w') {
        agregarElemento('gray')
    }
    if (event.key == 'e') {
        agregarElemento('brown')
    }
})

function agregarElemento(color) {
    const nuevoDiv = document.createElement("div");

    nuevoDiv.style.width = "200px"
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.border = "2px solid black"

    document.body.appendChild(nuevoDiv)

}