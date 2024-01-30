// Loops also known as Itterators or Itterations

for (let index = 0; index <= 10; index++) {
  const element = index * 2
//   console.log(element)
}

// let write an if statment inside our loop

for (let j = 1; j <= 10; j++) {
  const element = j
  if (j == 5) {
    // console.log('5 is the best number')
  }
//   console.log(element)
}

// lets write nested loops

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) { 
        // console.log(`Inner loop value ${j}`);
    }
}

// now lets print 1 to 10 tables

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`)
    for (let j = 1; j <= 10; j++) { 
        console.log(i + "*" + j + "=" + i*j);
    }
}