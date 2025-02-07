const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`)
    }).catch((error) => {
        console.error('MongoDB Connection Error:', error);
    });

}

module.exports = connectDatabase;
