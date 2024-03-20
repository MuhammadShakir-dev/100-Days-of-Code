// Creating a promise 

const promiseOne = new Promise(function (resolve, rejeect) {
    setTimeout(function () { 
        console.log("Task no 1: Async JS");
        resolve();
    }, 1000)
 });
 

promiseOne.then(function () { 
    console.log("Task no 1 is resolved");
})


// second way of creating and consuming a promise

new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        console.log("Task no 2:  Async JS");
        resolve();
    }, 1000)
}).then(function () { 
    console.log("Task no 2 is resolved");
})

// lets try anothery way to working with promises

const promiseThree = new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        resolve({ username: "Shakir,dev", email: "Shakir.dev@example.com" });
    }, 1000)
})

promiseThree.then(function (user) { 
    console.log(user);
})


// now let's understand how we can work/ how to handle errors

const promisefour = new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        let error = false;
        if (!error) {
            resolve({username : "Muhammad Shakir", email: "muhammadshakirdev@gmail.com"})
        } else { 
            reject("opps: something went wrong")
        }
    },1000)
})


promisefour
    .then((usr) => {
        return usr.username
    })
    .then((info) => {
        console.log(info);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// now lets try async await 

const promiseFive = new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript Dev", password: "1234@" })
        } else { 
            reject("Error: JS went wrong")
        }
    }, 1000)
}) 

async function consumePromise() {
    try {
        const response = await promiseFive;
        console.log(response.username)
    } catch (error) { 
        console.log(error)
    }
 }
 
consumePromise();

async function getUserInfo() { 
    try {
        const request = await fetch('https://api.github.com/users/Muhammadshakir-dev');
        const data = await request.json();
        console.log(data);
    }
    catch (error) { 
        console.log("E : ",  error);
    }
}
getUserInfo();


//let's do this with try and catch

fetch('https://api.github.com/users/Muhammadshakir-dev')
    .then(function (response) { 
        return response.json()
    })
    .then(function (data) { 
        console.log(data);
    })
    .catch(function (error) { 
        console.log('Error: ', error)
    })



