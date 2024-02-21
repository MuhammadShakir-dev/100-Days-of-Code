// Lets build our understanding with JS DOM

// This will give the exact id name of the id you're looking for
document.getElementById("title").id


// This will give you the classname of the class you're looking for
document.getElementById("title").className

// You can also find the attributes inside of an html tag 
document.getElementById("title").getAttribute('class')

// You cans also set attribute inside of an HTML tag but notedown onething that this will overwrite your class name
// you can avoid this by giving them an extra name

document.getElementById("title").setAttribute('class', 'test'); // this will overwrite heading => test
document.getElementById('title').setAttribute('class', 'test heading') // this is the correct way of doing this


// lets store the getElementById in a variable
let title = document.getElementById("title");

// You can also set styles in this using the above variable
title.style.backgroundColor = 'lightGreen'
title.style.color = 'black'
title.style.textAlign = 'center'


// Now let's see how to add content 
title.innerText; // shows only the visile text on the webpage not the hidden onces .
title.textContent; // shows the actual text present in an HTML Tag doesn't matters it is hidden or not.
title.innerHTML; // gives you the HTML value and if you have written nested HTML tags it will give you that to.


// Now lets understand some usefull query selectors that will use in real world
// There is big difference between query selector and query Selector all

document.querySelector('h1'); // this will give you the very first h1 present in the HTML Doc
document.querySelectorAll('h1'); // this will give you all the h1's present in the HTML Doc
document.querySelector('#title'); // this will give you id who name is title
document.querySelector('.heading') // this will give you class who name is heading
document.querySelector('input') // for selecting input
document.querySelector('input[type = "password"]') // select input where type =  
document.querySelector('p:first-child') // select para first child


// lets see you we can select a ul and inside that ul select li and apply styles on that
const ul = document.querySelector('ul')
const trunGreen = ul.querySelector('li')
trunGreen.style.backgroundColor = "Green"
trunGreen.style.padding = "10px 10px"


// Lets understand the difference between querySelectorAll and querySelector
/*
    querySelector will return you a HTML element
    querySelectorAll will return you a NodeList in which have all the HTML element you are looking for

    Nodelist is not an array =>  you will not apply map, reduce or other array methods on it but some things you can use in it
*/

const temLiList = document.querySelectorAll('li')
temLiList[0].style.color = "Green"
temLiList[1].style.color = "Yellow"
temLiList[2].style.color = "Red"
// in this way you can apply properties and manipulte the,

temLiList.forEach((list) => {
    list.style.backgroundColor = 'green'
})


  
 

