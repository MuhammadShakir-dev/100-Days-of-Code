const input = document.querySelector('input');
const btn = document.querySelector('button');
const imgContainer = document.querySelector('.imageContainer');
const userName = document.querySelector('.name');
const userBio = document.querySelector('.bio');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');

const imageHolder = document.createElement('img');


function getInfo() { 
    const githubAccountUserName = input.value;  
    const requestApi = `https://api.github.com/users/${githubAccountUserName}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestApi);
    xhr.onreadystatechange = function () { 
        console.log(xhr.readyState);
        if (xhr.readyState === 4) { 
            const data = JSON.parse(this.responseText);
            imageHolder.setAttribute('src', `${data.avatar_url}`);
            imageHolder.classList.add("img");
            imgContainer.appendChild(imageHolder);
            input.value = "";
            userName.innerHTML = `<span>Name: ${data.login}</span>`;
            userBio.innerHTML = `<span>Bio: ${data.bio}</span>`;
            userFollowers.innerHTML = `<span>Followers: ${data.followers}</span>`;
            userFollowing.innerHTML = `<span>Following: ${data.following}</span>`;
        }
    }

    xhr.send();
}

btn.addEventListener('click', getInfo);
