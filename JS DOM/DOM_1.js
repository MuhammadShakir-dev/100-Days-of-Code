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




  
 

