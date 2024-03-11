const clock = document.querySelector(".clock");
const button = document.querySelector("button");
let total = 0;

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

button.addEventListener("click", () => { 
    if (total === 0) { 
        button.style.backgroundColor = "#2f2f2f";
        button.style.color = "white";
        button.innerHTML = "Dark Mode";
        clock.style.backgroundColor = "#2f2f2f";
        clock.style.color = "white"; 
        total = 1;
    } 

    else if (total === 1) { 
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.innerHTML = "Day Mode";
        clock.style.backgroundColor = "white";
        clock.style.color = "black"; 
        total = 0;
    }
})