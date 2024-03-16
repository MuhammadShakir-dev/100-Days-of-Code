//lets understan a bit more about JS Events and how we can use them   

// some important events are
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// altKey, ctrlKey, shiftKey, KeyCodeor 


// There are three parametres in the best approch for writing event in dom.


// Now to understand the event propogation you must know the imporatance of the third parameter

// document.querySelector("#images").addEventListener("click", () => { 
//     alert("Images clicked")
// }, false); 

// document.querySelector('#building').addEventListener('click', () => {
//     alert("Building Clicked")
// }, false)
// The above on is event bubling from bottom to top


// Now lets do the same thing with event capturing which is top to bottom.
// document.querySelector("#images").addEventListener("click", () => { 
//     alert("Images clicked")
// }, true); 

// document.querySelector('#building').addEventListener('click', () => {
//     alert("Building Clicked")
// }, true);


// Now to prevent the bubling of the element lets try
// document.querySelector("#images").addEventListener("click", () => { 
//     alert("Images clicked")
// }); 

// document.querySelector('#building').addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert("Building Clicked")
// });


// Now lets do a small project  

// Task 
/*
    your task is to write a program using JS events in which  when the user clicked on the image it will remove
    but when the usern clicked on the li it will not remove the ul.  
*/


document.querySelector("#images").addEventListener('click', (e) => { 
    if (e.target.tagName === "IMG") { 
        let removeIt = e.target.parentNode;
        removeIt.remove();
        //removeIt.parentNode.removeChild(removeIt);
    }
}, false)
