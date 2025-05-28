//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is a templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static('_dirname')); //was 'public'

//reference test json file of users
var data = require('./test.json');

//index/home URL
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about page/url
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//users route
app.get('/users',(req,res)=>{
    let title = "Users Page";
    res.render('users/index',{
      'title': title,
      'users': data
    });
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
  // console.log(data);
});

