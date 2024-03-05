const express = require('express');
const projects_routes = require('./projects');
const multer = require('multer');
const path = require('path');

var router = express.Router();


// // Set up Multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         const d = new Date();
//         var date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
//         var time = d.getHours() + '.' + d.getMinutes() + "." + d.getSeconds() + "." + d.getMilliseconds()
//         var fullTime = date + " " + time;
//         cb(null, file.fieldname + '-' + fullTime + path.extname(file.originalname));
//     }
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const d = new Date();
        var date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
        var time = d.getHours() + '.' + d.getMinutes() + "." + d.getSeconds() + "." + d.getMilliseconds()
        var fullTime = date + " " + time;
        // console.log('storage - ', path.extname(file.originalname))
        cb(null, file.fieldname + '-' + fullTime + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    dest: 'uploads/' });


// Define a route to handle file uploads 
// router.post('/uploadProRep', projects_routes.createUploadProRep);

// router.post('/uploadRepFiles/:fileId/:rptName', upload.single('proposal_rpt'), projects_routes.createUploadRep);
// router.post('/uploadRepFiles/:fileId/:rptName', upload.single('alfa_rpt'), projects_routes.createUploadRep);
// router.post('/uploadRepFiles/:fileId/:rptName', upload.single('beta_rpt'), projects_routes.createUploadRep);
// router.post('/uploadRepFiles/:fileId/:rptName', upload.single('final_rpt'), projects_routes.createUploadRep);



router.post('/uploadProposalRep/:fileId/:fileName', upload.single('proposal_rpt'), projects_routes.createUploadPropRep);
router.post('/uploadAlfaRep/:fileId/:fileName', upload.single('alfa_rpt'), projects_routes.createUploadAlfaRep);
router.post('/uploadBetaRep/:fileId/:fileName', upload.single('beta_rpt'), projects_routes.createUploadBetaRep);
router.post('/uploadFinalRep/:fileId/:fileName', upload.single('final_rpt'), projects_routes.createUploadFinalRep);

router.post('/addproject', projects_routes.createProject);
router.post('/addmoderator', projects_routes.createModerator);
router.post('/addstudent', projects_routes.createStudent);
router.post('/addcoordinator', projects_routes.createCoordinator);
router.post('/addProjectToModerator/:modID', projects_routes.AddProjectToModerator);
router.post('/addProjectToJudge/:id_judge', projects_routes.AddProjectToJudge);
router.post('/addJudgesToProject/:id_pjt', projects_routes.AddJudgesToProject);
router.post('/saveGrdInPjt/:id_pjt', projects_routes.SaveGrdInPjt);
router.post('/saveSubInPjt/:id_pjt', projects_routes.SaveSubInPjt);
// router.post('/addJudgesToSubRpt/:id_pjt', projects_routes.AddJudgesToSubRpt);
router.post('/dateOfSub', projects_routes.DateOfSub);
router.post('/createGrdDoc', projects_routes.CreateGradeDoc);
router.post('/createSubDoc', projects_routes.CreateSubDoc);
router.post('/addJudgeGrd/:id', projects_routes.addJudgeGrd);
router.post('/addJudgeSub/:id', projects_routes.addJudgeSub);

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
router.get('/getModeratorProjects/:id', projects_routes.getModeratorProjects);
router.get('/getemail/:id', projects_routes.getEmailMod);
router.get('/getdates', projects_routes.getDates);
router.get('/getModeratorProjectsJudge/:id/:idBtn', projects_routes.getModeratorProjectsJudge);
router.get('/download-file/:fileId/:rpt', projects_routes.downloadFile);
router.get('/getPjts/:id_mod', projects_routes.getProjetsById);
router.get('/getGradeIdDoc/:id_mod', projects_routes.getGradeIdDoc);
router.get('/getGradeId/:id_pjt', projects_routes.getGradeId);
router.get('/getsubRptIdDoc/:id_mod', projects_routes.getSubRptIdDoc);
router.get('/getsubRptId/:id_pjt', projects_routes.getSubRptId);
router.get('/getGrdDoc/:gradeId', projects_routes.getGrdsDoc);
router.get('/getSubDoc/:subId', projects_routes.getSubsDoc);

router.put('/updatProject/:id', projects_routes.updateProject);
router.put('/updateStudent/:id', projects_routes.updateStudent);
router.put('/updateModerator/:id', projects_routes.updateModerator);
router.put('/updateIdModToProjet/:id', projects_routes.updateIdModToProjet);
router.put('/updateStudentIdPjt/:id', projects_routes.updateStudentIdPjt);
router.put('/saveGrade/:id', projects_routes.SaveGrades);
router.put('/saveSub/:id', projects_routes.SaveSubs);
router.put('/updateGrdDocId/:id_grd', projects_routes.UpdateGradeDocId);
router.put('/updateSubDocId/:id_sub', projects_routes.UpdateSubDocId)

router.delete('/deletePjt/:id', projects_routes.deleteProject);



module.exports = router;