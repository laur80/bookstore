// import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';
const mongoose = require('mongoose');

// dbConnect();
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

mongoose.connection
   .once('open',()=>console.log('connection to DB open'))
   .on('error',error=>console.log('error',error))  
   

export default async (req, res) => {
   const { method } = req;

   switch (method) {
       case 'GET':
           try {
              
              const notes = await Book.find({});
               res.status(200).json({ success: true, data: notes })
               
           } catch (error) {
               res.status(400).json({ success: false });
           }
           break;
       case 'POST':
           try {
              
              const note = await Book.create(req.body);
               res.status(201).json({ success: true, data: note })
               
           } catch (error) {
               res.status(400).json({ success: false });
           }
           break;

       default:
         res.status(400).json({ success: false });
         break;
   }
   
   await  mongoose.connection.close(()=>console.log('Connection DB closed'))
   }




