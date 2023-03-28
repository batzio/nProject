const { json } = require('express');
const Project = require('../models/Project.js')
const Lecturer = require('../models/Lecturer.js')
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
    CreateProject: function (req, res) {
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
            const project = new Project(req.body);
            project.save().then(project =>
                res.status(200).send(project)
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
};