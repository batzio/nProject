const { json } = require('express');
const fs = require('fs');
const Project = require('../models/Project.js');
const ProposalReport = require('../models/ProposalReport.js');
const AlfaReport = require('../models/AlfaReport.js');
const BetaReport = require('../models/BetaReport.js');
const FinalReport = require('../models/FinalReport.js');
const Moderator = require('../models/Moderator.js')
const Student = require('../models/Student.js')
const Coordinator = require('../models/Coordinator.js');
const DateOfSubmission = require('../models/DateOfSubmission.js');
const Grade = require('../models/Grades.js');
const SubRpt = require('../models/SubmissionReport.js')
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

    createUploadPropRep: async function (req, res) {
        const fileName = req.params.fileName;
        const filePath = path.join('uploads', fileName);

        const newFile = new ProposalReport({
            propos_rpt_name: fileName,
            propos_rpt_path: filePath,
            propos_rpt_id: req.params.fileId
        });
        // const oldFileName = req.file.filename;
        // await uploadHandle(newFile, oldFileName, fileName, res);

        try {
            await newFile.save();
            res.status(200).send(newFile);
            const oldFilePath = path.join('uploads', req.file.filename); // Use req.file.filename to get the file path
            const newFilePath = path.join('uploads', fileName);
            fs.rename(oldFilePath, newFilePath, function (err) {
                if (err) {
                    console.error("Error renaming file:", err);
                } else {
                    console.log("File renamed successfully.");
                }
            });
        } catch (error) {
            console.error("Error saving file to MongoDB:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    /*
    createUploadAlfaRep: async function (req, res) {
        const fileName = req.params.fileName;
        const filePath = path.join('uploads', fileName);

        const newFile = new AlfaReport({
            alfa_rpt_name: fileName,
            alfa_rpt_path: filePath,
            alfa_rpt_id: req.params.fileId
        });
        await newFile.save();
            res.status(200).send(newFile);
    },
    */

    createUploadAlfaRep: async function (req, res) {
        const fileName = req.params.fileName;
        const filePath = path.join('uploads', fileName);

        const newFile = new AlfaReport({
            alfa_rpt_name: fileName,
            alfa_rpt_path: filePath,
            alfa_rpt_id: req.params.fileId
        });
        try {
            await newFile.save();
            res.status(200).send(newFile);
            const oldFilePath = path.join('uploads', req.file.filename); // Use req.file.filename to get the file path
            const newFilePath = path.join('uploads', fileName);
            fs.rename(oldFilePath, newFilePath, function (err) {
                if (err) {
                    console.error("Error renaming file:", err);
                } else {
                    console.log("File renamed successfully.");
                }
            });
        } catch (error) {
            console.error("Error saving file to MongoDB:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    createUploadBetaRep: async function (req, res) {
        const fileName = req.params.fileName;
        const filePath = path.join('uploads', fileName);

        const newFile = new BetaReport({
            beta_rpt_name: fileName,
            beta_rpt_path: filePath,
            beta_rpt_id: req.params.fileId
        });
        try {
            await newFile.save();
            res.status(200).send(newFile);
            const oldFilePath = path.join('uploads', req.file.filename); // Use req.file.filename to get the file path
            const newFilePath = path.join('uploads', fileName);
            fs.rename(oldFilePath, newFilePath, function (err) {
                if (err) {
                    console.error("Error renaming file:", err);
                } else {
                    console.log("File renamed successfully.");
                }
            });
        } catch (error) {
            console.error("Error saving file to MongoDB:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    createUploadFinalRep: async function (req, res) {
        const fileName = req.params.fileName;
        const filePath = path.join('uploads', fileName);

        const newFile = new FinalReport({
            final_rpt_name: fileName,
            final_rpt_path: filePath,
            final_rpt_id: req.params.fileId
        });
        try {
            await newFile.save();
            res.status(200).send(newFile);
            const oldFilePath = path.join('uploads', req.file.filename); // Use req.file.filename to get the file path
            const newFilePath = path.join('uploads', fileName);
            fs.rename(oldFilePath, newFilePath, function (err) {
                if (err) {
                    console.error("Error renaming file:", err);
                } else {
                    console.log("File renamed successfully.");
                }
            });
        } catch (error) {
            console.error("Error saving file to MongoDB:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    // async uploadHandle (newFile, oldFileName, fileName, res) {
    //     try {
    //         await newFile.save();
    //         res.status(200).send(newFile);
    //         const oldFilePath = path.join('uploads', oldFileName); // Use req.file.filename to get the file path
    //         const newFilePath = path.join('uploads', fileName);
    //         fs.rename(oldFilePath, newFilePath, function (err) {
    //             if (err) {
    //                 console.error("Error renaming file:", err);
    //             } else {
    //                 console.log("File renamed successfully.");
    //             }
    //         });
    //     } catch (error) {
    //         console.error("Error saving file to MongoDB:", error);
    //         res.status(500).send("Internal Server Error");
    //     }
    // },



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
        console.log(req.body)
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

    //שמירת תאריכי הגשה
    DateOfSub: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const dateOfSub = new DateOfSubmission(req.body);
            dateOfSub.save().then(dateOfSub =>
                res.status(200).send(dateOfSub)
            ).catch(e => res.status(400).send(e))
        }
    },

    CreateGradeDoc: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const gradeDoc = new Grade(req.body);
            gradeDoc.save().then(gradeDoc =>
                res.status(200).send(gradeDoc._id)
            ).catch(e => res.status(400).send(e))
        }
    },

    CreateSubDoc: function (req, res) {
        if (!req.body) res.status(400).send("There is no body")
        else {
            const subDoc = new SubRpt(req.body);
            subDoc.save().then(subDoc =>
                res.status(200).send(subDoc._id)
            ).catch(e => res.status(400).send(e))
        }
    },
    // DateOfSub: function (req, res) {
    //     if (!req.body) res.status(400).send("There is no body")
    //     else {
    //         const dateOfSub = new DateOfSubmission(req.body);
    //         dateOfSub.save().then(dateOfSub =>
    //             res.status(200).send(dateOfSub)
    //         ).catch(e => res.status(400).send(e))
    //     }
    // },

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
        // console.log(req.body)
        Student.find({ "password": req.params.password }).then(student => {
            // console.log(student),
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
        // console.log('getModerators')
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
        Moderator.find({ "mod_ID": req.params.id }).then(moderator => {
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

    //מחזיר את הפרויקטים שמנחה זה שופט
    getProjetsById: function (req, res) {
        // console.log(req.params.id)
        Moderator.find({ "mod_ID": req.params.id_mod }).then(moderator => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(moderator[0].judge_project_arr)
        }
        ).catch(e => res.status(500).send())
    },

    //מחזיר את רשימת האיידי של הציונים של הפרויקטים שהמנחה שופט
    getGradeIdDoc: function (req, res) {
        // console.log(req.params.id)
        Moderator.find({ "mod_ID": req.params.id_mod }).then(moderator => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(moderator[0].Grades_arr)
        }
        ).catch(e => res.status(500).send())
    },

    //מחזיר את רשימת האיידי של הציונים של אותו פרויקט
    getGradeId: function (req, res) {
        // console.log(req.params.id)
        Project.find({ "_id": req.params.id_pjt }).then(project => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(project[0].Grades_arr)
        }
        ).catch(e => res.status(500).send())
    },
    //////////////
    //מחזיר את רשימת האיידי של האישורים של הפרויקטים שהמנחה שופט
    getSubRptIdDoc: function (req, res) {
        // console.log(req.params.id)
        Moderator.find({ "mod_ID": req.params.id_mod }).then(moderator => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(moderator[0].SubRpt)
        }
        ).catch(e => res.status(500).send())
    },

    //מחזיר את רשימת האיידי של האישורים של אותו פרויקט
    getSubRptId: function (req, res) {
        // console.log(req.params.id)
        Project.find({ "_id": req.params.id_pjt }).then(project => {
            // console.log(moderator[0].mod_email)
            res.status(200).send(project[0].SubRpt)
        }
        ).catch(e => res.status(500).send())
    },
    ///////////////////////
    getDates: function (req, res) {
        // console.log('getDates')
        DateOfSubmission.find().then(dateOfSub =>
            res.send(dateOfSub)
        ).catch(e => res.status(500).send())
    },

    //הצמדת פרויקט לכפתור
    getModeratorProjectsJudge: function (req, res) {
        // console.log(req.params)
        const idBtn = req.params.idBtn;
        Moderator.find({ "mod_ID": req.params.id }).then(moderator => {
            if (idBtn === "firstPjt") {
                if (moderator[0].judge_project_arr[0] != "") {
                    res.status(200).send(moderator[0].judge_project_arr[0])
                }
            }
            else if (idBtn === "secondPjt") {
                if (moderator[0].judge_project_arr[1] != "") {
                    res.status(200).send(moderator[0].judge_project_arr[1])
                }
            }
            else {
                if (moderator[0].judge_project_arr[2] != "") {
                    res.status(200).send(moderator[0].judge_project_arr[2])
                }
            }
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
        console.log('updateStudent')
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


    ///////////////////////////////////
    // updateDateOfSub: function (req, res) {
    //     console.log('in updates')
    //     console.log(req.body)
    //     const update = Object.keys(req.body)
    //     // console.log(updates)
    //     //var myObject = { a: 'c', b: 'a', c: 'b' };
    //     // var keyNames = Object.keys(myObject);
    //     // const allowedUpdates = ['password'];
    //     // const allowedUpdates = [updates];
    //     // const isValidOperation = updates.length === 1 && updates[0] === 'password';
    //     // if (!isValidOperation) {
    //     //     return res.status(400).send({ error: 'Invalid updates!' })
    //     // }
    //     if (update === "alfaRpt") {
    //         DateOfSubmission.findOneAndUpdate({ updates: req.body.password }, { new: true, runValidators: true })
    //             .then(moderator => {
    //                 if (!moderator) {
    //                     return res.status(404).send('There is no project')
    //                 }
    //                 else {
    //                     res.send(moderator)
    //                 }
    //             }).catch(e => res.status(400).send(e))
    //     }
    //     // DateOfSubmission.findOneAndUpdate({ updates: req.body.password }, { new: true, runValidators: true })
    //     //     .then(moderator => {
    //     //         if (!moderator) {
    //     //             return res.status(404).send('There is no project')
    //     //         }
    //     //         else {
    //     //             res.send(moderator)   
    //     //         }
    //     //     }).catch(e => res.status(400).send(e))
    // },

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

    SaveGrades: function (req, res) {
        // console.log('in updateS')
        // console.log(req.body)
        // const updates = Object.keys(req.body)
        // // const allowedUpdates = ['id_pjt'];
        // const isValidOperation = updates.length === 1 && updates[0] === 'id_pjt';
        // if (!isValidOperation) {
        //     return res.status(400).send({ error: 'Invalid updates!' })
        // }

        if (req.body.idBtn === "alfa") {
            Grade.findOneAndUpdate({ "_id": req.params.id }, { "alfa_rpt_grd": req.body.grd }, { new: true, runValidators: true })
                .then(grade => {
                    if (!grade) {
                        return res.status(404).send('There is no student')
                    }
                    else {
                        res.send(grade)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else if (req.body.idBtn === "final") {
            Grade.findOneAndUpdate({ "_id": req.params.id }, { "final_rpt_grd": req.body.grd }, { new: true, runValidators: true })
                .then(grade => {
                    if (!grade) {
                        return res.status(404).send('There is no student')
                    }
                    else {
                        res.send(grade)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else {
            Grade.findOneAndUpdate({ "_id": req.params.id }, { "final_grd_pjt": req.body.grd }, { new: true, runValidators: true })
                .then(grade => {
                    if (!grade) {
                        return res.status(404).send('There is no student')
                    }
                    else {
                        res.send(grade)
                    }
                }).catch(e => res.status(400).send(e))
        }
    },

    SaveSubs: function (req, res) {

        if (req.body.idBtn === "proposal") {
            SubRpt.findOneAndUpdate({ "_id": req.params.id }, { "prop_rpt_sub": "ok" }, { new: true, runValidators: true })
                .then(subRpt => {
                    if (!subRpt) {
                        return res.status(404).send('There is no submission')
                    }
                    else {
                        res.send(subRpt)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else if (req.body.idBtn === "alfa") {
            SubRpt.findOneAndUpdate({ "_id": req.params.id }, { "alfa_rpt_sub": "ok" }, { new: true, runValidators: true })
                .then(subRpt => {
                    if (!subRpt) {
                        return res.status(404).send('There is no submission')
                    }
                    else {
                        res.send(subRpt)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else if (req.body.idBtn === "beta") {
            SubRpt.findOneAndUpdate({ "_id": req.params.id }, { "beta_rpt_sub": "ok" }, { new: true, runValidators: true })
                .then(subRpt => {
                    if (!subRpt) {
                        return res.status(404).send('There is no submission')
                    }
                    else {
                        res.send(subRpt)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else if (req.body.idBtn === "final") {
            Grade.findOneAndUpdate({ "_id": req.params.id }, { "final_rpt_grd": req.body.grd }, { new: true, runValidators: true })
                .then(grade => {
                    if (!grade) {
                        return res.status(404).send('There is no student')
                    }
                    else {
                        res.send(grade)
                    }
                }).catch(e => res.status(400).send(e))
        }

        else {
            Grade.findOneAndUpdate({ "_id": req.params.id }, { "final_grd_pjt": req.body.grd }, { new: true, runValidators: true })
                .then(grade => {
                    if (!grade) {
                        return res.status(404).send('There is no student')
                    }
                    else {
                        res.send(grade)
                    }
                }).catch(e => res.status(400).send(e))
        }
    },

    AddProjectToModerator: function (req, res) {
        console.log('AddProjectToModerator')
        // console.log(req.body)
        console.log(req.params.modID)
        if (!req.body) res.status(400).send("There is no body");
        // else if (!req.params["_id"] || !req.body.modID) res.status(400).send("Missing parameters");
        else {
            //find the specific moderator and update it
            Moderator.findOneAndUpdate({ "mod_ID": req.params.modID }, { $push: { projects_arr: req.body.projectID } }, { new: true, runValidators: true }).then(moderator => {
                if (!moderator) {
                    return res.status(404).send()
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    SaveGrdInPjt: function (req, res) {
        console.log('SaveGrdInPjt')
        if (!req.body) res.status(400).send("There is no body");
        else {
            //find the specific project and update it
            Project.findOneAndUpdate({ "_id": req.params.id_pjt }, { $push: { Grades_arr: req.body.GradeID } }, { new: true, runValidators: true }).then(project => {
                if (!project) {
                    return res.status(404).send()
                }
                else {
                    res.send(project)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    SaveSubInPjt: function (req, res) {
        console.log('SaveSubInPjt')
        if (!req.body) res.status(400).send("There is no body");
        else {
            //find the specific project and update it
            Project.findOneAndUpdate({ "_id": req.params.id_pjt }, { $push: { SubRpt: req.body.SubRptID } }, { new: true, runValidators: true }).then(project => {
                if (!project) {
                    return res.status(404).send()
                }
                else {
                    res.send(project)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    AddProjectToJudge: function (req, res) {
        // console.log('AddProjectToModerator')
        // console.log(req.body)
        // console.log(req.params.modID)
        if (!req.body) res.status(400).send("There is no body");
        // else if (!req.params["_id"] || !req.body.modID) res.status(400).send("Missing parameters");
        else {
            //find the specific moderator and update it
            Moderator.findOneAndUpdate({ "_id": req.params.id_judge }, { $push: { judge_project_arr: req.body.projectID } }, { new: true, runValidators: true }).then(moderator => {
                if (!moderator) {
                    return res.status(404).send()
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    // This function add id's judges to project
    AddJudgesToProject: function (req, res) {
        console.log('AddJudgesToProject')
        console.log(req.params)
        // console.log(req.body)
        // console.log(req.params.modID)
        if (!req.body) res.status(400).send("There is no body");
        // else if (!req.params["_id"] || !req.body.modID) res.status(400).send("Missing parameters");
        else {
            //find the specific moderator and update it
            Project.findOneAndUpdate({ "_id": req.params.id_pjt }, { $push: { Judges_arr: req.body.JudgeID, } }, { new: true, runValidators: true }).then(project => {
                if (!project) {
                    return res.status(404).send()
                }
                else {
                    res.send(project)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    addJudgeGrd: function (req, res) {
        if (!req.body) res.status(400).send("There is no body");
        else {
            //find the specific moderator and update it
            Moderator.findOneAndUpdate({ "_id": req.params.id }, { $push: { Grades_arr: req.body.id_grade, } }, { new: true, runValidators: true }).then(moderator => {
                if (!moderator) {
                    return res.status(404).send()
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    addJudgeSub: function (req, res) {
        if (!req.body) res.status(400).send("There is no body");
        else {
            //find the specific moderator and update it
            Moderator.findOneAndUpdate({ "_id": req.params.id }, { $push: { SubRpt: req.body.id_sub, } }, { new: true, runValidators: true }).then(moderator => {
                if (!moderator) {
                    return res.status(404).send()
                }
                else {
                    res.send(moderator)
                }
            }).catch(e => res.status(400).send(e))
        }
    },

    // // This function add id's judges to sub rpt
    // AddJudgesToSubRpt: function (req, res) {
    //     console.log('AddJudgesToSubRpt')
    //     console.log(req.params)
    //     // console.log(req.body)
    //     // console.log(req.params.modID)
    //     if (!req.body) res.status(400).send("There is no body");
    //     // else if (!req.params["_id"] || !req.body.modID) res.status(400).send("Missing parameters");
    //     else {
    //         //find the specific moderator and update it
    //         Project.findOneAndUpdate({ "_id": req.params.id_pjt }, { $push: { SubRpt: req.body.JudgeID, } }, { new: true, runValidators: true }).then(project => {
    //             if (!project) {
    //                 return res.status(404).send()
    //             }
    //             else {
    //                 res.send(project)
    //             }
    //         }).catch(e => res.status(400).send(e))
    //     }
    // },

    // AddPathRptToStudent: function (req, res) {
    //     // console.log('AddJudgesToProject')
    //     console.log(req.params)
    //     console.log(req.body)
    //     if (!req.body) res.status(400).send("There is no body");
    //     else {
    //         //find the specific moderator and update it
    //         Student.findOneAndUpdate({ "sdt_ID": req.params.id }, { $push: { reports_arr: req.body.rptPath } }, { new: true, runValidators: true }).then(student => {
    //             if (!student) {
    //                 return res.status(404).send()
    //             }
    //             else {
    //                 res.send(student)
    //             }
    //         }).catch(e => res.status(400).send(e.message || e))
    //     }
    // },

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

    // downloadFile: function (req, res) {
    //     res.download('./uploads/alfa_rpt-30.1.2024 10.22.6.336.png')
    // },

    downloadFile: function (req, res) {
        console.log(req.params)
        const rptStr = req.params.rpt;
        const fileId = req.params.fileId;
        // // Ensure that filePath is provided
        // if (!filePath) {
        //     return res.status(400).send("File path is missing");
        // }

        res.download('./uploads/' + rptStr + '-' + fileId + '.pdf');
    },


    // downloadFiles: async function (req, res) {
    //     const fileId = req.params.fileId;
    //     try {
    //         var file, fileName, filePath;

    //         if (fileId === '0000') {
    //             file = await ProposalReport.findOne({ propos_rpt_id: fileId });
    //             fileName = file.propos_rpt_name;
    //         } else if (fileId === '0001') {
    //             file = await AlfaReport.findOne({ alfa_rpt_id: fileId });
    //             fileName = file.alfa_rpt_name;
    //         } else if (fileId === '0010') {
    //             file = await BetaReport.findOne({ beta_rpt_id: fileId });
    //             fileName = file.beta_rpt_name;
    //         } else {
    //             file = await FinalReport.findOne({ final_rpt_id: fileId });
    //             fileName = file.final_rpt_name;
    //         }

    //         filePath = path.join(__dirname, '..', '..', 'uploads', fileName);

    //         // Check if the file exists
    //         if (!fs.existsSync(filePath)) {
    //             console.log('File does not exist');
    //             return res.status(404).json({ error: 'File not found' });
    //         }
    //         else {
    //             // Log the file details for debugging
    //             console.log('fileId - ', fileId);
    //             console.log('fileName - ', fileName);
    //             console.log('filePath - ', filePath);

    //             // Send the file
    //             res.sendFile(filePath);
    //             // res.status(200).json({ filePath });
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: 'Server error' });
    //     }
    // },

    deleteProject: function (req, res) {
        // console.log('deleteConference - ' + req.params.id)
        Project.deleteOne({ _id: req.params.id }, function (err) {
            if (!err) {
                res.status(200).send();
            }
            else {
                res.status(500).send()
            }
        });
    }
    /*
    app.get('/downloadFile/:vehicleId/:fileIndex', async (req, res) => {
  const vehicleId = req.params.vehicleId;
  const fileIndex = req.params.fileIndex;

  try {
    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle || !vehicle.files[fileIndex]) {
      return res.status(404).json({ error: 'File not found' });
    }

    const fileName = vehicle.files[fileIndex];
    const filePath = path.join(__dirname, 'uploads', fileName); // Define the file path

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
    */

    // downloadFiles: async function (req, res) {//להבין איך אי מצליחה להשיג את ה- ID של הקובץ
    //     const fileId = req.params.fileId;
    //     try {
    //         if (fileId === '0000') {
    //             const file = await ProposalReport.findOne({ propos_rpt_id: fileId });
    //             const fileName = file.propos_rpt_name;
    //             console.log('fileId - ', fileId)
    //             const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
    //             console.log('fileName - ',fileName)
    //             console.log('filePath - ',filePath)
    //             // res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    //             res.sendFile(filePath)
    //         }
    //         else if (fileId === '0001') {
    //             const file = await AlfaReport.findOne({ alfa_rpt_id: fileId });
    //             const fileName = file.alfa_rpt_name;
    //             const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
    //             res.sendFile(filePath)
    //         }
    //         else if (fileId === '0010') {
    //             const file = await BetaReport.findOne({ beta_rpt_id: fileId });
    //             const fileName = file.beta_rpt_name;
    //             const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
    //             res.sendFile(filePath)
    //         }
    //         else {
    //             const file = await FinalReport.findOne({ final_rpt_id: fileId });
    //             const fileName = file.final_rpt_name;
    //             const filePath = path.join(__dirname, '..', '..', 'uploads', fileName); // Define the file path
    //             res.sendFile(filePath)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: 'Server error' });
    //     }
    // }
};