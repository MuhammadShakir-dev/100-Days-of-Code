// How to create a new element in DOM |

const mainClass = document.querySelector('.parent');
// console.log(mainClass);

// Now lets find the childerns inside of a mainClass
// console.log(mainClass.children);

// for (let i = 0;  i < mainClass.children.length; i++) {
//     console.log(mainClass.children[i].innerText); 
// }

// You can also use two interesting propeties
// console.log(mainClass.firstElementChild);
// console.log(mainClass.lastElementChild);


// Lets find parent from children
const day = document.querySelector('.day');
// console.log(day.parentElement);
// console.log(day.nextElementSibling);

// console.log("Nodes: ", mainClass.childNodes);


const newDiv = document.createElement('div');
newDiv.className = "boxStyle";
newDiv.innerText = "Hello World";
document.body.appendChild(newDiv);


const createDiv = (bgColor, text) => {
    const div = document.createElement('div');
    div.className = "newClass";
    div.style.backgroundColor = bgColor;
    div.innerText = text;    
    document.body.appendChild(div)
}

createDiv("Green", "HelloWorld");
createDiv("red", "GitHub");

const apndDiv = document.querySelector('.addBtn');

for (let i = 1; i <= 100; i++) { 
    const btn = document.createElement('button');
    btn.innerText = "Click me";
    apndDiv.appendChild(btn)
}


