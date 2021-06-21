const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongotube', { useNewUrlParser: true, useUnifiedTopology: true });


// Mongodb Connection check [.once(), .on() is special type of promise used with databases]
mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => {
        console.log("Your Error", error);
    })