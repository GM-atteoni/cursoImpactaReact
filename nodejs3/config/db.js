const mongoose = require('mongoose');
const schema = mongoose.Schema;

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/apirest', { useNewUrlParser: true });
