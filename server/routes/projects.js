const { json } = require('express');
// const bcrypt = require('bcrypt');
const Project = require('../models/Project.js')
const Moderator = require('../models/Moderator.js')
const Student = require('../models/Student.js')
const Coordinator = require('../models/Coordinator.js')

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
        console.log("blablabla")
        if (!req.body) res.status(400).send("There is no body")
        else {
            console.log("blablabla")
            const project = new Project(req.body);
            project.save().then(project =>
                res.status(200).send(project)
            ).catch(e => res.status(400).send(e))
        }
    },

    createStudent: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const student = new Student(req.body);
            student.save().then(student =>
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
        Student.find({ "password": req.params.password }).then(student => {
            res.status(200).send(student)
        }
        ).catch(e => res.status(500).send())
    },

    getPasswordMod: function (req, res) {
        // console.log('getPasswordMod')
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
            res.send(coordinator)
        ).catch(e => res.status(500).send())
    },

    updateProject: function (req, res) {
        console.log(JSON.stringify(req.body.name))
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'subject', 'details', 'project_type', 'status', 'offer', 'add_time']
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

    /* getProject()
    get id conference and show lecturer list of this conference
    return with status 200 in success
    */
    getProject: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        //If the conference doesnt exist
        console.log('getProject - ' + JSON.stringify(req.body._id))
        Project.find({ "_id": req.params.id }).then(project => {
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },
};