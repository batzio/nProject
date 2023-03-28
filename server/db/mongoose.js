const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/FinalProject', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
