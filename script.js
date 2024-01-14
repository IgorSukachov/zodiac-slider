let slides = document.querySelectorAll('.slide')
let slider = [] // для src

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src
    slides[i].remove()
}

let step = 0
let offset = 0

function draw () {
    let img = document.createElement('img')
    img.src = slider[step]
    img.classList.add('slide')
    img.style.left = offset * 800 + 'px' 
    document.querySelector('#slider').appendChild(img)
    if (step + 1 == slider.length) {
        step = 0
    } else {
        step++
    }
    offset = 1
}

draw()
draw()
// Можно повторять названия внутри функций, потому что переменные внутри функции, видны только в её функциональной области видимости
function left () {
    document.onclick = null // Запрещаем функцию left, чтобы коректно срабатывал setTimeout
    let offset = 0
    let slides = document.querySelectorAll('.slide')
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = offset * 800 - 800 + 'px'
        offset++
    }
    setTimeout(() => {
        slides[0].remove()
        draw()
        document.onclick = left // Включили
    }, 1000)
}

document.onclick = left