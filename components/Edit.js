
import {  Box,VStack,Divider,Text, Button, Center, Spinner, Stack,Skeleton,
   Editable, EditableInput, EditablePreview, Flex,IconButton, Wrap,ButtonGroup } from "@chakra-ui/react";
import {  EditIcon,CheckIcon,CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';

export default function CustomControlsExample(props) {
   const [state, setState] = useState(props[0])
   const item = props[2]
  console.log(item);
   function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
     return isEditing ? (
       <ButtonGroup justifyContent="center" size="sm">
         <IconButton icon={<CheckIcon />} onClick={()=>onSubmit(alert(state))} />
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