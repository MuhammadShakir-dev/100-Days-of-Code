const btn = document.querySelector('button');
const imgContainer = document.querySelector('.imgContainer');
const infoDiv = document.querySelector('.infoDiv');
const usrName = document.querySelector('.name');
const bio = document.querySelector('.bio');
const usrFollowers = document.querySelector('.followers');
const usrFollowing = document.querySelector('.following'); 

const img = document.createElement('img');

let getUserName = prompt('Enter you github username'); 

if (getUserName === "") { 
    alert("Enter a valid username");
    getUserName = prompt('Enter you github username'); 
}

let requestURL = `https://api.github.com/users/${getUserName}`;

function getInfo() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', requestURL)
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        img.setAttribute('src', `${data.avatar_url}`);
        img.classList.add("img")
        imgContainer.appendChild(img);
        bio.innerHTML = data.bio;
        usrName.innerHTML = data.login;
        usrFollowers.innerHTML = `<span>Followers : ${data.followers}<span/>`;
        usrFollowing.innerHTML =  `<span>Followers : ${data.following}<span/>`;
    }
  }
  xhr.send()
}

btn.addEventListener("click", getInfo)



