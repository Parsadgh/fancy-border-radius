const btnX = document.querySelectorAll('.btnX')
const btnY = document.querySelectorAll('.btnY')
const jingol = document.querySelectorAll('.jingol')
const box = document.querySelector('.box')
const percent = document.querySelector('.percent')
const shape = document.querySelector('.shape')

let id = null
let x1, x2, x3, x4, x5, x6, x7, x8

x1 = 30
x2 = 70
x3 = 70
x4 = 30
x5 = 30
x6 = 30
x7 = 70
x8 = 70

btnX.forEach(i => {
    i.addEventListener('mousedown', (e) => {
        id = e.target.id
        window.addEventListener('mousemove', para)
    })
    window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', para)
        id = null
    })
})

btnY.forEach(i => {
    i.addEventListener('mousedown', (e) => {
        id = e.target.id
        window.addEventListener('mousemove', para2)
    })
    window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', para2)
        id = null
    })
})

function para(e) {
    const button = document.getElementById(id)
    const boxRect = box.getBoundingClientRect()
    let x = e.clientX - boxRect.left

    x = Math.max(0, Math.min(x, boxRect.width))
    name = button.id
    button.style.left = x + 'px'

    if (name == 'bt3') {
        x1 = (+x / 3.6).toFixed(0);
        x2 = (100 - x1)
        sum(x1, x2, x3, x4, x5, x6, x7, x8)


    } else if (name == 'bt4') {
        x4 = (+x / 3.6).toFixed(0);
        x3 = (100 - x4)
        sum(x1, x2, x3, x4, x5, x6, x7, x8)

    }
}

function para2(e) {
    const button = document.getElementById(id)
    const boxRect = box.getBoundingClientRect()
    let y = e.clientY - boxRect.top

    y = Math.max(0, Math.min(y, boxRect.height))
    name = button.id
    button.style.top = y + 'px'

    if (name == 'bt2') {
        x6 = (+y / 3.6).toFixed(0);
        x7 = (100 - x6)
        sum(x1, x2, x3, x4, x5, x6, x7, x8)


    } else if (name == 'bt1') {
        x5 = (+y / 3.6).toFixed(0);
        x8 = (100 - x5)
        sum(x1, x2, x3, x4, x5, x6, x7, x8)

    }
}


function sum(x1, x2, x3, x4, x5, x6, x7, x8) {
    borderR = percent.innerHTML = x1 + '% ' + x2 + '% ' + x3 + '% ' + x4 + '% / ' + x5 + '% ' + x6 + '% ' + x7 + '% ' + x8 + '%'
    shape.style.borderRadius = borderR
}