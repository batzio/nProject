const express = require('express');
const projects_routes = require('./projects');
// const upload = require('./upload')
const multer = require('multer');

var router = express.Router();


// Configure file upload with Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // The folder where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Define a route to handle file uploads
router.post('/uploadProRep', projects_routes.createUploadProRep)
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.status(200).json({ message: 'File uploaded successfully' });
// });
// app.use('/upload', express.static(path.join(__dirname, 'static/index.html')));

//  upload.single('propos_rpt'),
//                                 upload.single('alfa_rpt'),
//                                 upload.single('beta_rpt'),
//                                 upload.single('finall_rpt'),
router.post('/addproject', projects_routes.createProject);
router.post('/addmoderator', projects_routes.createModerator);
router.post('/addstudent', projects_routes.createStudent);
router.post('/addcoordinator', projects_routes.createCoordinator);
router.post('/addProjectToModerator/:modID', projects_routes.AddProjectToModerator);

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
router.get('/moderatorProjects/:id', projects_routes.getModeratorProjects);
router.get('/getemail/:id', projects_routes.getEmailMod);

router.put('/updatProject/:id', projects_routes.updateProject);
router.put('/updateStudent/:id', projects_routes.updateStudent);
router.put('/updateModerator/:id', projects_routes.updateModerator);
router.put('/updateIdModToProjet/:id', projects_routes.updateIdModToProjet);

module.exports = router;