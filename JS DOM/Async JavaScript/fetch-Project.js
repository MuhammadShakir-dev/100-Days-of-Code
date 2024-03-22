
const input = document.querySelector("input")
const btn = document.querySelector("button")
const resultBar = document.querySelector(".resultBar");
const p = document.createElement("p")

function sendingRequest() { 
    const userName = input.value;
        fetch(`https://api.github.com/users/${userName}`)
            .then(function(response){ 
                const data = response.json();
                return data;
            })
            .then(function (data) {
                const userInfo = data.bio;   
                resultBar.appendChild(p);
                p.innerHTML = userInfo;
                p.style.textAlign = "center";
                input.value = "";
            })
            .catch(function (error) {
                console.log("User not found", error);
             })     
    
} 


btn.addEventListener("click", sendingRequest)
