const express = require('express')
require('./server/db/mongoose')
const routers = require('./server/routes/routes.js')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000


app.use('/login', express.static(path.join(__dirname, 'client/html/Login.html')));
app.use('/addproject', express.static(path.join(__dirname, 'client/html/add_project.html')));
app.use('/home', express.static(path.join(__dirname, 'client/html/home_page.html')));
app.use('/Monitoring', express.static(path.join(__dirname, 'client/html/Monitoring_the_project.html')));
// app.use('/lecturers', express.static(path.join(__dirname, 'client/html/lecturer_list.html')));
// app.use('/lecturerconference', express.static(path.join(__dirname, 'client/html/add_lecture.html')));

app.use('/css', express.static(path.join(__dirname, 'client/css')));
app.use('/js', express.static(path.join(__dirname, 'client/js')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})