import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';

const CreateNote = (props) =>{
    const[note,setNote]=useState({title:"", content:""});
        
       
  
      
   const inputEvent = (event) =>{
       /*const value=event.target.value;
       const name=event.target.name; or Es6*/

       const {value,name} = event.target;        
   
        setNote((prevData) =>{
            return{
                ...prevData,
                [name]:value,
            };
        });
   };
    
   const addEvent = () =>{
       props.passNote(note);
       setNote({title:"", content:""});
   }

  return(
    <>
    <div className="main_note">
      <form>
        <input type="text" 
        name="title"
        value={note.title} 
        onChange={inputEvent} 
        placeholder="Write a Title..."
        autoComplete="OFF"/><br/>

        <textarea rows="" column="" 
        name="content"
        value={note.content}
        onChange={inputEvent}  
        placeholder="Write a note..."></textarea>

         
         <Button onClick={addEvent}>
         <Tooltip title="Add" aria-label="add">
        <AddIcon className="plus_sign"/>
         </Tooltip>
                       </Button>
         
                       </form>

    </div>
      
    </>
  );

}
export default CreateNote;
