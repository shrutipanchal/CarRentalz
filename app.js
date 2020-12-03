// to load the modules
const express = require('express');
const exphbs = require('express-handlebars');

//init app
const app = express();

//load files
const keys = require('./config/keys');


//setup view engine
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

//connect client side to server css and js file
app.use(express.static('public'));

//create port
const port = process.env.PORT || 3000;


//handle home route
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Page'
    });
});

app.get('/cars',(req,res)=>{
    res.render('cars',{
        title: 'Cars'
    });
});

app.get('/contact',(req,res)=>{
    res.render('contact',{
        title: 'Contact Us'
    });
});

app.get('/signup',(req,res)=>{
    res.render('SignUpForm',{
        title: 'Register'
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
;    //console.log('Server is up on port'+ port);
});
