// Hoisting concepts and scope concepts

// console.log(a);
// var a = "Muhammad Shakir"; 
// console.log(b);


function a() {
    const user_Name = "Muhammad Shakir";
    function b(){ 
        const user_Age = 22;
        console.log(`${user_Name} age is ${user_Age}`);
    }
    b()
}
a();

// Lets do this with if else

if (true) { 
    const gender = "Male";
    if (gender === "Male") { 
        const height = 5.8;
        console.log(`That human is ${gender}`);
    }

    // console.log(height);
}

// console.log(gender);

