const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    mongoDB_conn : process.env.MONGODB_CONN,
    PORT : process.env.PORT,
};