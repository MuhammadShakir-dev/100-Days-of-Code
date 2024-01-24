// the story of Scope starts with the keywords
/*
    let => is block scoped
    var => is global scoped
    const => is block scoped
*/

if (true) { 
    let a = 10;
    console.log(`Inner a : ${a}`);

    const b = 112;
    console.log(`Inner b : ${b}`);
    
    var c = 2020;
}

let a = 200;
let b = 400;

console.log(`Outer a : ${a}`); // 200
console.log(`Outer b : ${b}`); // 400
console.log(c); // 2020

