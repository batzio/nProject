const express = require('express')
const multer = require('multer');
require('./server/db/mongoose')
const routers = require('./server/routes/routes.js')
const path = require('path');

const app = express()
const port = process.env.PORT || 3005


app.use('/login', express.static(path.join(__dirname, 'client/html/Login.html')));

app.use('/addproject', express.static(path.join(__dirname, 'client/html/add_project.html')));

app.use('/home', express.static(path.join(__dirname, 'client/html/home_page.html')));

app.use('/Monitoring', express.static(path.join(__dirname, 'client/html/Monitoring_the_project.html')));

app.use('/changepassword', express.static(path.join(__dirname, 'client/html/reset_password.html')));

app.use('/template', express.static(path.join(__dirname, 'client/html/template.html')));

app.use('/addstudent', express.static(path.join(__dirname, 'client/html/add_student.html')));

app.use('/updatedates', express.static(path.join(__dirname, 'client/html/update_dates.html')));

app.use('/assigAndsubDats', express.static(path.join(__dirname, 'client/html/assignments_and_submission_dates.html')));

app.use('/addmoderator', express.static(path.join(__dirname, 'client/html/add_moderator.html')));

app.use('/uploads', express.static('uploads'));

app.use('/addcoordinator', express.static(path.join(__dirname, 'client/html/add_coordinator.html')));

app.use('/css', express.static(path.join(__dirname, 'client/css')));

app.use('/js', express.static(path.join(__dirname, 'client/js')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})