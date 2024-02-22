// lets understand How to Edit and remove elements in DOM

const list = document.querySelector('ul');

const addLanguage = (lang) => { 
    const newli = document.createElement('li');
    newli.innerHTML = lang;
    list.appendChild(newli);
}

addLanguage("Typescript");
addLanguage("Python");

// Now lets write optimized code 
const optimizedAddLang = (lang) => { 
    const newli = document.createElement('li');
    newli.appendChild(document.createTextNode(lang));
    list.appendChild(newli)
}

optimizedAddLang('golang');
optimizedAddLang('Ruby on Rails');
optimizedAddLang('Java');

