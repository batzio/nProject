const express = require('express');
const projects_routes = require('./projects');
const upload = require('./upload')

var router = express.Router();

router.post('/addproject', projects_routes.createProject);
router.post('/addmoderator', projects_routes.createModerator);
router.post('/addstudent', upload.single('alfa_rpt_exm'), projects_routes.createStudent);
router.post('/addcoordinator',  upload.single('Proposal_rpt'),
                                upload.single('alfa_rpt'),
                                upload.single('beta_rpt'),
                                upload.single('finall_rpt'),projects_routes.createCoordinator);

router.get('/projects', projects_routes.getProjects);
router.get('/explanation/:id', projects_routes.getExplanation);
router.get('/status/:id', projects_routes.getStatus);
router.get('/getModeratorPwd/:password', projects_routes.getPasswordMod);
router.get('/student/:id', projects_routes.getIdSdt);
router.get('/moderator/:id', projects_routes.getIdMod);
router.get('/getStudentPwd/:password', projects_routes.getPasswordSdt); 
router.get('/getstudents', projects_routes.getStudents);
router.get('/getmoderators', projects_routes.getModerators);
router.get('/project/:id', projects_routes.getProject);
router.get('/getCoodinator', projects_routes.getCoodinator);
// router.get('/getcoorrdinator', projects_routes.getCoorrdinator);

router.put('/updatProject/:id', projects_routes.updateProject);
router.put('/updateStudent/:id', projects_routes.updateStudent);
router.put('/updateModerator/:id', projects_routes.updateModerator);

module.exports = router;