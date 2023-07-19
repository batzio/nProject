// // const express = require('express');
// const multer = require('multer');

// // const app = express();

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the directory where you want to save the uploaded files
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     // Specify a unique name for the uploaded file
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// // Create the multer instance and specify the storage configuration
// const upload = multer({ storage: storage });

// // Define the route for file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   // The uploaded file is available as req.file
//   if (!req.file) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // File upload was successful
//   res.send('File uploaded!');
// });

// // // Start the server
// // app.listen(3000, () => {
// //   console.log('Server is running on http://localhost:3000');
// // });
