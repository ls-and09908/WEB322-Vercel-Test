const path = require('path');
const express=require('express');
const app=express();
const HTTP_PORT=process.env.PORT || 8012;

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
// makes public folder static
// css files placed into this folder do not need to specify the 'public' dir in the path,
// because express knows to automatically look for them in public
// images and videos similarly seem to automatically check public without updating the path
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/about.html'));
})

app.get('/about', (req, res)=>{
    //res.send("About Page");
    res.sendFile(path.join(__dirname, '/views/about.html'));
})

app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/honesty', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/honesty.html'));
})

// starting the server
app.listen(HTTP_PORT, ()=>console.log(`The server is listening on port: ${HTTP_PORT}`))