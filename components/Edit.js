
import {  Box,VStack,Divider,Text, Button, Center, Spinner, Stack,Skeleton,
   Editable, EditableInput, EditablePreview, Flex,IconButton, Wrap,ButtonGroup } from "@chakra-ui/react";
import {  EditIcon,CheckIcon,CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';

export default function CustomControlsExample(props) {

   let id = props[3].id
   let url =`/api/books/${id}`;
   const [state, setState] = useState(props[0].description)
//   console.log('id',props[3].id);
  const editBook = async(e) =>{
     let data = {title: props[1].title,author: props[2].author,description:state}
     console.log(data);
   const res =await axios.put(url,data)
   console.log(res);
  }
   function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
     return isEditing ? (
       <ButtonGroup justifyContent="center" size="sm">
         <IconButton icon={<CheckIcon />} onClick={()=>onSubmit(editBook())} />
         <IconButton icon={<CloseIcon />} onClick={onCancel} />
       </ButtonGroup>
     ) : (
       <Flex justifyContent="center">
         <IconButton size="lg" icon={<EditIcon />} onClick={onEdit} />
       </Flex>
     )
   }
 
   return (
     <Editable
      
       value={state}
       textAlign="center"
       defaultValue={state}
       fontSize="md"
       isPreviewFocusable={false}
       submitOnBlur={false}
     >
       {(props) => (
         <>
           <EditablePreview />
           <EditableInput  size="lg"  h='60' w='90%' onChange={e=>setState(e.target.value)}/>
           <EditableControls {...props} />
         </>
       )}
     </Editable>
   )
 }