const btn_One = document.getElementById("grey");
const btn_Two = document.getElementById("white");
const btn_Three = document.getElementById("blue");
const btn_Four = document.getElementById("yellow");
const body = document.querySelector('body');

btn_Four.addEventListener('click', () => {
    let bgColor = btn_Four.id
    body.style.backgroundColor = bgColor;
});

btn_Three.addEventListener('click', () => { 
    let bgColor = btn_Three.id
    body.style.backgroundColor = bgColor;   
})

btn_Two.addEventListener('click', () => { 
    let bgColor = btn_Two.id
    body.style.backgroundColor = bgColor;
})

btn_One.addEventListener('click', () => { 
    let bgColor = btn_One.id
    body.style.backgroundColor = bgColor;
})
