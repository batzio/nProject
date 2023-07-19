const express = require('express'),
    projects_routes = require('./projects');

var router = express.Router();

router.post('/addproject', projects_routes.createProject);
router.post('/addmoderator', projects_routes.createModerator);
router.post('/addstudent', projects_routes.createStudent);

router.get('/projects', projects_routes.getProjects);
router.get('/explanation/:id', projects_routes.getExplanation);
router.get('/status/:id', projects_routes.getStatus);
router.get('/moderator/:password', projects_routes.getPassword);
router.get('/student/:password', projects_routes.getPassword);
router.get('/students', projects_routes.getStudents);
router.get('/project/:id', projects_routes.getProject);

router.put('/updatProject/:id', projects_routes.updateProject);


module.exports = router;