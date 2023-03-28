const express = require('express'),
    projects_routes = require('./projects');

var router = express.Router();

router.post('/addproject', projects_routes.CreateProject);
router.get('/projects', projects_routes.getProjects);      
router.get('/explanation/:id', projects_routes.getExplanation)        

// router.put('/conferences/:id', projects_routes.updateConference);     
// router.post('/addlecturer/:id', projects_routes.AddLecturerToConference);     
// router.get('/conferences', projects_routes.getConferences);     
// router.delete('/lecturer/:id/:idlec', projects_routes.deleteLecturerFromConference);     
// router.delete('/list/:id', projects_routes.deleteConference);        
// router.post('/lecturer/', projects_routes.CreateLecturer);   
// router.get('/lecturers', projects_routes.getLecturers);  
// router.get('/getlecturesconference/:id', projects_routes.getLecturesConferences);


module.exports = router;