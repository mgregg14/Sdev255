const fs = require('fs');

// Write

//fs.writeFile('./doc/blog1.txt', 'Hello, World', () =>{
//    console.log('file was written');
//})

//fs.writeFile('./doc/blog2.txt', 'Hello, Again', () =>{
//    console.log('file was written');
//})

//directories
if (fs.existsSync('./assets')) {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Folder deleted');
    });
} else {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Folder created');
    });
}


//delete

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if (err){
            console.log(err)

        }
    console.log('file deleted');
    
    })
}