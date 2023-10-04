const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
        // document.getElementById('id_alfa_file_hidden').value = Date.now() + ext
    }
})

var upload = multer({
    storage: storage,//application/pdf
    fileFilter: function(req, file, callback){
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg"){
            callback(null, true)
        }
        else{
            console.log('onle pdf files supportted!')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload
    