import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';

export default async(req, res) => {
   dbConnect();
   const{
      method,
      query:{id}
   } = req;

   switch(method) {
      case 'GET':
   
            try {
               const books = await Book.findById(id);
   
               if(!books){
                  res.status(400).json({succes:false});
               }
   
               res.status(200).json({succes:true, data: books});
            } catch (error) {
               res.status(400).json({succes:false});
            }
   
      break;
      
      case 'PUT':
   
            try {
               
               const editBook= await Book.findOneAndUpdate(id, req.body, {new: true, runValidators:true});
               if(!editBook){
                  res.status(400).json({succes:false});
               }
               res.status(200).json({succes:true, data: editBook});
   
            } catch (error) {
               res.status(400).json({succes:false});
            }
   
      break; 
   
      case 'DELETE':
            try {
               const deleteBook= await Book.findOneAndDelete({_id: id});
               if(!deleteBook){
                  res.status(400).json({succes:false});
               }
               res.status(200).json({succes:true, data: {}});
            } catch (error) {
               res.status(400).json({succes:false});
            }
         break; 
   
         default:
            res.status(400).json({succes:false});
         break; 
   
     } 

}

















