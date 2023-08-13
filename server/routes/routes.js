const express = require('express'),
    projects_routes = require('./projects');

var router = express.Router();

router.post('/addproject', projects_routes.createProject);
router.post('/addmoderator', projects_routes.createModerator);
router.post('/addstudent', projects_routes.createStudent);

router.get('/projects', projects_routes.getProjects);
router.get('/explanation/:id', projects_routes.getExplanation);
router.get('/status/:id', projects_routes.getStatus);
router.get('/getModeratorPwd/:password', projects_routes.getPasswordMod);
router.get('/student/:id', projects_routes.getIdSdt);
router.get('/moderator/:id', projects_routes.getIdMod);
router.get('/getStudentPwd/:password', projects_routes.getPasswordSdt); 
router.get('/students', projects_routes.getStudents);
router.get('/moderators', projects_routes.getModerators);
router.get('/project/:id', projects_routes.getProject);
// router.get('/getstudent:username', projects_routes.getUsername);

router.put('/updatProject/:id', projects_routes.updateProject);
router.put('/updateStudent/:id', projects_routes.updateStudent);
router.put('/updateModerator/:id', projects_routes.updateModerator);

module.exports = router;