const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;
const connection = {};
// const client = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

const dbConnect = async () => {
   if(connection.isConnected) {
      return;
   }

   const db = await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   connection.isConnected = db.connections[0].readyState;
   console.log(connection.isConnected);
}

module.exports = dbConnect;