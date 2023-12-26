const { json } = require('express');
const Project = require('../models/Project.js');
const ProposalReport = require('../models/ProposalReport.js');
const AlfaReport = require('../models/AlfaReport.js');
const BetaReport = require('../models/BetaReport.js');
const FinalReport = require('../models/FinalReport.js');
const Moderator = require('../models/Moderator.js')
const Student = require('../models/Student.js')
const Coordinator = require('../models/Coordinator.js');
const path = require('path');

function isValidDate(date) {
    var str_date = new Date(date).toISOString().slice(0, 10)
    const arr_date = str_date.split("-");
    var y = parseInt(arr_date[0]);
    var m = parseInt(arr_date[1]);
    var d = parseInt(arr_date[2]);
    var curren_year = new Date().getFullYear();
    if ((y < curren_year || y > 9999) || (m < 1 || m > 12) || (d < 1 || d > 31)) {
        return false
    }
    else if (((m == 2) && (d > 28)) || (((m == 4) || (m == 6) || (m == 9) || (m == 11)) && (d > 30))) {
        return false
    }
    else {
        return true
    }
}

module.exports = {

    createProject: function (req, res) {
        // console.log("createProject")
        if (!req.body) res.status(400).send("There is no body")
        else {
            const project = new Project(req.body);

            project.save().then(project =>
                res.status(200).send(project)
            ).catch(e => res.status(400).send(e))
        }
    },

    // createUploadRep: async function (req, res) {
    //     console.log('createUploadRep')
    //     consolr.log(req.params)
    //     const newFile = new ProposalReport({
    //         propos_rpt_name: req.file.filename,
    //         propos_rpt_path: req.file.path,
    //         propos_rpt_id: '0000'
    //     });
    //     await newFile.save();
    //     res.status(200).send(newFile);
    // },



    createUploadPropRep: async function (req, res) {
        console.log('createUploadPropRep')
        console.log(req.params)
        const newFile = new ProposalReport({
            propos_rpt_name: req.file.filename,
            propos_rpt_path: req.file.path,
            propos_rpt_id: req.params.fileId
        });
        await newFile.save();
        res.status(200).send(newFile);
    },

    createUploadAlfaRep: async function (req, res) {
        const newFile = new AlfaReport({
            alfa_rpt_name: req.file.filename,
            alfa_rpt_path: req.file.path,
            alfa_rpt_id: req.params.fileId
        });
        await newFile.save();
        res.status(200).send(newFile);
    },

    createUploadBetaRep: async function (req, res) {
        const newFile = new BetaReport({
            beta_rpt_name: req.file.filename,
            beta_rpt_path: req.file.path,
            beta_rpt_id: req.params.fileId
        });
        await newFile.save();
        res.status(200).send(newFile);
    },

    createUploadFinalRep: async function (req, res) {
        const newFile = new FinalReport({
            final_rpt_name: req.file.filename,
            final_rpt_path: req.file.path,
            final_rpt_id: req.params.fileId
        });
        await newFile.save();
        res.status(200).send(newFile);
    },

    createStudent: function (req, res) {
        console.log('in add student - server')
        console.log(req.body)
        if (!req.body) res.status(400).send("There is no body")
        else {
            const student = new Student(req.body);
            student.save().then(student =>
                // console.log(student),
                res.status(200).send(student)
            ).catch(e => res.status(400).send(e))
        }
    },

    createModerator: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const moderator = new Moderator(req.body);
            moderator.save().then(moderator =>
                res.status(200).send(moderator)
            ).catch(e => res.status(400).send(e))
        }
    },

    createCoordinator: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const coordinator = new Coordinator(req.body);
            coordinator.save().then(coordinator =>
                res.status(200).send(coordinator)
            ).catch(e => res.status(400).send(e))
        }
    },

    getProjects: async function (req, res) {
        await Project.find().then(project =>
            res.send(project)
        ).catch(e => res.status(500).send())
    },

    getExplanation: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        Project.find({ "_id": req.params.id }).then(project => {
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },

    getStatus: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        Project.find({ "_id": req.params.id }).then(project => {
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },

    getIdSdt: function (req, res) {
        Student.find({ "sdt_ID": req.params.id }).then(student => {
            res.status(200).send(student)
        }
        ).catch(e => res.status(500).send())
    },

    getIdMod: function (req, res) {
        // console.log('getIdMod - ')
        Moderator.find({ "mod_ID": req.params.id }).then(moderator => {
            res.status(200).send(moderator)
        }
        ).catch(e => res.status(500).send())
    },

    getPasswordSdt: function (req, res) {
        // console.log('getPasswordSdt')
        Student.find({ "password": req.params.password }).then(student => {
            res.status(200).send(student)
        }
        ).catch(e => res.status(500).send())
    },

    getPasswordMod: function (req, res) {
        console.log('getPasswordMod - ')
        console.log(req.body)
        Moderator.find({ "password": req.params.password }).then(moderator => {
            // console.log('getPasswordMod iii - ', moderator[0]),
            res.status(200).send(moderator)
        }
        ).catch(e => res.status(500).send())
    },

    getStudents: function (req, res) {
        Student.find().then(student =>
            res.send(student)
        ).catch(e => res.status(500).send())
    },

    getModerators: function (req, res) {
        console.log('getModerators')
        Moderator.find().then(moderator =>
            res.send(moderator)
        ).catch(e => res.status(500).send())
    },

    getCoodinator: function (req, res) {
        // if (!req.params["id"]) res.status(400).send("There is no id");
        Coordinator.find().then(coordinator =>
            // console.log('getCoodinator - ', coordinator[0]),
            res.send(coordinator)
        ).catch(e => res.status(500).send())
    },

    /* getProject()
    get id conference and show lecturer list of this conference
    return with status 200 in success
    */
    getProject: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        //If the conference doesnt exist
        // console.log('getProject - ')
        // console.log(req.params)
        Project.find({ "_id": req.params.id }).then(project => {
            // console.log(project),
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },

    getModeratorProjects: function (req, res) {
        // console.log(req.params.id)
        Moderator.find({ "_id": req.params.id }).then(moderator => {
            // console.log(moderator[0])
            res.status(200).send(moderator[0].projects_arr)
        }
        ).catch(e => res.status(500).send())
    },

    getEmailMod: function (req, res) {
        // console.log(req.params.id)
        Moderator.find({ "_id": req.params.id }).then(moderator => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(moderator[0].mod_email)
        }
        ).catch(e => res.status(500).send())
    },

    updateProject: function (req, res) {
        // console.log(JSON.stringify(req.body.name))
        console.log('updateProject')
        // console.log(req.body)
        // console.log(req.params)
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name_english', 'name_hebrew', 'details', 'project_type', 'status', 'single_or_couple', 'update_time', 'external_factor', 'external_party_email']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }
        Project.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, runValidators: true }).then(project => {
            if (!project) {
                return res.status(404).send('There is no project')
            }
            else {
                res.send(project)
            }
        }).catch(e => res.status(400).send(e))
    },

    updateStudent: function (req, res) {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['password'];
        const isValidOperation = updates.length === 1 && updates[0] === 'password';

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }

        Student.findOneAndUpdate({ "sdt_ID": req.params.id }, { "password": req.body.password }, { new: true, runValidators: true })
            .then(student => {
                if (!student) {
                    return res.status(404).send('There is no project')
                }
                else {
                    res.send(student)
                }
            }).catch(e => res.status(400).send(e))
    },

    updateModerator: function (req, res) {
        console.log('in updateS')
        const updates = Object.keys(req.body)
        const allowedUpdates = ['password'];
        const isValidOperation = updates.length === 1 && updates[0] === 'password';
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }
        Moderator.findOneAndUpdate({ "mod_ID": req.params.id }, { "password": req.body.password }, { new: true, runValidators: true })
            .then(moderator => {
                if (!moderator) {
                    return res.status(404).send('There is no project')
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
    },

    updateStudentIdPjt: function (req, res) {
        console.log('in updateS')
        console.log(req.body)
        const updates = Object.keys(req.body)
        const allowedUpdates = ['id_pjt'];
        const isValidOperation = updates.length === 1 && updates[0] === 'id_pjt';
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }
        Student.findOneAndUpdate({ "sdt_ID": req.params.id }, { "id_pjt": req.body.id_pjt }, { new: true, runValidators: true })
            .then(student => {
                if (!student) {
                    return res.status(404).send('There is no student')
                }
                else {
                    res.send(student)
                }
            }).catch(e => res.status(400).send(e))
    },

    AddProjectToModerator: function (req, res) {
        console.log('AddProjectToModerator')
        // console.log(req.body)
        // console.log(req.params.modID)
        if (!req.body) res.status(400).send("There is no body");
        // else if (!req.params["_id"] || !req.body.modID) res.status(400).send("Missing parameters");
        else {
            //find the specific moderator and update it
            Moderator.findOneAndUpdate({ "_id": req.params.modID }, { $push: { projects_arr: req.body.projectID } }, { new: true, runValidators: true }).then(moderator => {
                if (!moderator) {
                    return res.status(404).send()
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    updateIdModToProjet: function (req, res) {
        console.log('updateIdModToProjet')
        // console.log(req.body)
        const updates = Object.keys(req.body)
        const allowedUpdates = ['mod_id'];
        const isValidOperation = updates.length === 1 && updates[0] === 'mod_id';

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }

        Project.findOneAndUpdate({ "_id": req.params.id }, { "mod_id": req.body.mod_id }, { new: true, runValidators: true })
            .then(project => {
                if (!project) {
                    return res.status(404).send('There is no project')
                }
                else {
                    res.send(project)
                }
            }).catch(e => res.status(400).send(e))
    },

    downloadFiles: async function (req, res) {//להבין איך אי מצליחה להשיג את ה- ID של הקובץ
        const fileId = req.params.fileId;
        try {
            if (fileId === '0000') {
                const file = await ProposalReport.findOne({ propos_rpt_id: fileId });
                const fileName = file.propos_rpt_name;
                // console.log('fileName - ', fileName)
                const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
                console.log('fileName - ',fileName)
                console.log('filePath - ',filePath)
                // res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
                res.sendFile(filePath)
            }
            else if (fileId === '0001') {
                const file = await AlfaReport.findOne({ alfa_rpt_id: fileId });
                const fileName = file.alfa_rpt_name;
                const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
                res.sendFile(filePath)
            }
            else if (fileId === '0010') {
                const file = await BetaReport.findOne({ beta_rpt_id: fileId });
                const fileName = file.beta_rpt_name;
                const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
                res.sendFile(filePath)
            }
            else {
                const file = await FinalReport.findOne({ final_rpt_id: fileId });
                const fileName = file.final_rpt_name;
                const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
                res.sendFile(filePath)
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};