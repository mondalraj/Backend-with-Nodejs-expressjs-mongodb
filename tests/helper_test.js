const mongoose = require('mongoose');


before((done) => {
    mongoose.connect('mongodb://localhost/mongotube', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once('open', () => {
            // console.log('Connected');
            done();
        })
        .on('error', (error) => {
            console.log("Your Error", error);
        })
})
