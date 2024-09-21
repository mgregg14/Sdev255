const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//set up listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    //res.send ('<p >home page </p>');
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.send ('<p >about page </p>');
    res.render('about');
});

//redirect

app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

//404

app.use((req,res) =>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
