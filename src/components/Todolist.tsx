import React from "react";
import { toDoProps } from "./interfaces";
import Todotable from "./Todotable"


function Todolist() {

    const [toDo, settoDo] = React.useState<toDoProps>({} as toDoProps);

    const [descriptionDatePriority, setDescriptionDatePriority] = React.useState({description: '', date: '', priority: ''});
    const [todos, setTodos] = React.useState([toDo]);


    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        settoDo({...toDo, [event.target.id]: event.target.value});
      }
    
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos([...todos, toDo]);
      console.log(todos)
    }

    
      return(
        <>
          <form onSubmit={submitForm}>
            <input type="text" id="desc" value={toDo.description} onChange={inputChanged} placeholder="Description"/>
            <input type="text" id="date" value={toDo.date} onChange={inputChanged} placeholder="Date" />
            <input type="text" id="priority" value={toDo.priority} onChange={inputChanged} placeholder="Priority" />
            <input type="submit" value="Add" />
          </form>
          <Todotable todossss={todos} />
        </>
      )
    }

export default Todolist;