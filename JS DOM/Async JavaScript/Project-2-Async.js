const body = document.querySelector('body')
const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')

let interval

function changeColor() {
    if (!interval) { 
        interval = setInterval(() => {
            let r = parseInt(Math.random() * 255 + 1)
            let g = parseInt(Math.random() * 255 + 1)
            let b = parseInt(Math.random() * 255 + 1)
            let rgb = `rgb(${r},${g},${b})`
            body.style.backgroundColor = rgb
          }, 1000)
    }
}

function stopColor() {
    clearInterval(interval);
    interval = null;
    body.style.backgroundColor = 'white';
}

startbtn.addEventListener('click', changeColor)
stopbtn.addEventListener('click', stopColor)
