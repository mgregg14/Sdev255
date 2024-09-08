const fs = require('fs');

// Read

fs.readFile('./docs/blog12.txt', (err, data) => {
    if (err) {
        console.error(err);
    
    }
    console.log(data.toString());
});

console.log('last line');

// Write

fs.writeFile('./doc/blog1.txt', 'Hello, World', () =>{
    console.log('file was written');
})

fs.writeFile('./doc/blog1.txt', 'Hello, World', () =>{
    console.log('file was written');
})