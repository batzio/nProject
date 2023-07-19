const { json } = require('express');
const Project = require('../models/Project.js')
const Moderator = require('../models/Moderator.js')
const Student = require('../models/Student.js')

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
        
        // else if (!req.body.name ||
        //     !req.body.subject ||
        //     !req.body.details ||
        //     !req.body.project_type ||
        //     !req.body.status ||
        //     !req.body.offer ||
        //     !req.body.add_time) {
        //         console.log(req.body);
        //     res.status(400).send("Missing parameters")
        // }
        // else if (!isValidDate(req.body.date)) {
        //     res.status(400).send("Invalid date")
        // }
        else {
        console.log("blablabla")
            
            const project = new Project(req.body);
            console.log("project -- ",project)

            project.save().then(project =>
                res.status(200).send(project)
            ).catch(e => res.status(400).send(e))
        }
    },

    createStudent: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
    
        else {
            const student = new Student(req.body);
            console.log('st' + req.body),

            student.save().then(student =>
            // console.log('st' + student),
                
                res.status(200).send(student)
            ).catch(e => res.status(400).send(e))
        }
    },
    
    createModerator: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
    
        else {
            const moderator = new Moderator(req.body);
            // console.log('st' + req.body),

            moderator.save().then(moderator =>
            // console.log('st' + student),
                
                res.status(200).send(moderator)
            ).catch(e => res.status(400).send(e))
        }
    },
    
    getProjects: async function (req, res) {
        await Project.find().then(project => 
            // console.log('hi you - ' + lecturers_arr)
            res.send(project)
            // console.log('server - ')
        ).catch(e => res.status(500).send())
    },

    getExplanation: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        //If the project doesnt exist
        // console.log('getExplanation - ' + JSON.stringify(req.body._id))
        Project.find({ "_id": req.params.id }).then(project => {
            // console.log('getConference - conf - ' + JSON.stringify(conference) )
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },

    getStatus: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        //If the project doesnt exist
        // console.log('getExplanation - ' + JSON.stringify(req.body._id))
        Project.find({ "_id": req.params.id }).then(project => {
            // console.log('getConference - conf - ' + JSON.stringify(conference) )
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },

   
    // getUsername: function (req, res) {
    //     console.log('getUsername - ' + JSON.stringify(req.params.name))

    //     // if (!req.params["id"]) res.status(400).send("There is no id");
    //     // //If the project doesnt exist
    //     // console.log('getUsername - ')
    //     // console.log('getUsername - ' + JSON.stringify(req.body.id))
    //     Student.find({ "name": req.params.name }).then(student => {
    //         console.log('check - ', JSON.stringify(student[0].name)),
    //         // console.log('getConference - conf - ' + JSON.stringify(conference) )
    //         res.status(200).send(student)
    //     }
    //     ).catch(e => res.status(500).send())
    // },


    getPassword:function (req, res) {
        // if (!req.params["id"]) res.status(400).send("There is no id");
        //If the project doesnt exist
        // console.log('getExplanation - ' + JSON.stringify(req.body._id))
        Student.find({ "password": req.params.password }).then(student => {
            // console.log('getConference - conf - ' + JSON.stringify(conference) )
            res.status(200).send(student)
        }
        ).catch(e => res.status(500).send())
    },

    getStudents: function (req, res) {
        Student.find().then(student => 
            // console.log('try' + student)
            res.send(student)
        ).catch(e => res.status(500).send())
    },

    updateProject: function (req, res) {
        console.log(JSON.stringify(req.body.name))
        // if (!req.body.name ||
        //     !req.body.manager ||
        //     !req.body.image ||
        //     !req.body.date) {
        //     res.status(400).send("Missing parameters")
        // }
        // else if (!isValidDate(req.body.date)) {
        //     res.status(400).send("Invalid date")
        // }
        // else {          //If it's valid
            const updates = Object.keys(req.body)
            const allowedUpdates = ['name', 'subject', 'details', 'project_type', 'status', 'offer', 'add_time']
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

            if (!isValidOperation) {
                return res.status(400).send({ error: 'Invalid updates!' })
            }
            Project.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, runValidators: true }).then(project => {
                // console.log('updateConference - ' + conference)
                if (!project) {
                    return res.status(404).send('There is no project')
                }
                else {
                    res.send(project)
                }
            }).catch(e => res.status(400).send(e))
        // }
    },

    /* getConference()
    get id conference and show lecturer list of this conference
    return with status 200 in success
    */
    getProject: function (req, res) {
        if (!req.params["id"]) res.status(400).send("There is no id");
        //If the conference doesnt exist
        console.log('getProject - ' + JSON.stringify(req.body._id))
        Project.find({ "_id": req.params.id }).then(project => {
            // console.log('getConference - conf - ' + JSON.stringify(conference) )
            res.status(200).send(project)
        }
        ).catch(e => res.status(500).send())
    },
};