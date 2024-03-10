const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul')

btn.addEventListener("click", () => { 
    let value = input.value;
    let newLi = document.createElement('li');
    newLi.innerText = value;
    list.appendChild(newLi);
    input.value = ""
})