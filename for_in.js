// for in loops works with objects, arrays but not with map.

const obj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    ts: "TypeScript",
}

for (const keys in obj) { 
   // console.log(obj[keys]);
}

// lets use this with an array

const ary1 = ["JS", "PY", "RB", "TS"];
for (const value in ary1) { 
    console.log(ary1[value]);
}