const mongoose= require('mongoose');
// const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
   title:{
      type: String,
      required:[true,'pls add title!'],
      maxlength:[40,'no more than 20 ch']
   },
   description:{
      type: String,
      required:[true,'pls add title!'],
      maxlength:[200,'no more than 200 ch']
   }
}
   );

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;