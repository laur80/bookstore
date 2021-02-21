const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;

const dbConnect = async () => {
   if(mongoose.connection.readyState >=1) return

   return mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
}

export default dbConnect;