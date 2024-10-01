const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
    });

app.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public','about.html'));
});

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public', 'login.html'));
});


app.get('/register', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public', 'register.html'));
});

app.post('/login_in', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public', 'dashboard.html'));
});


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})